package com.alfa.backend.controller;

import com.alfa.backend.entity.Client;
import com.alfa.backend.enums.SignatureMethod;
import com.alfa.backend.exception.ClientNotFoundException;
import com.alfa.backend.payload.PredictionRequestPayload;
import com.alfa.backend.repository.ClientRepository;
import com.alfa.backend.service.ClientService;
import com.alfa.backend.service.PredictionSignatureService;
import com.alfa.backend.utils.AllowedSignaturesResolver;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Slf4j
public class ClientController {

    private final ClientRepository clientRepository;
    private final PredictionSignatureService predictionSignatureService;
    private final ClientService clientService;

    @Operation(
            summary = "Получение клиента по ID",
            description = "Возвращает объект клиента на основе идентификатора клиента."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Клиент успешно найден",
                    content = @Content(schema = @Schema(implementation = Client.class))),
            @ApiResponse(responseCode = "404", description = "Клиент не найден")
    })
    @GetMapping("/client")
    @Cacheable(value = "clients", key = "#clientId")
    public ResponseEntity<?> getClientById(@RequestParam(name = "clientId") @Parameter(description = "Идентификатор клиента") Long clientId) {
        Client client = clientRepository.findById(clientId).orElseThrow(() -> new ClientNotFoundException("Клиент с ID " + clientId + " не найден."));
        return ResponseEntity.ok().body(client);
    }

    @Operation(
            summary = "Предсказание метода подписи",
            description = "Возвращает предсказанный метод подписи для указанного клиента."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Предсказание успешно выполнено",
                    content = @Content(mediaType = MediaType.TEXT_PLAIN_VALUE)),
            @ApiResponse(responseCode = "404", description = "Клиент не найден")
    })
    @GetMapping(value = "/predict", produces = MediaType.TEXT_PLAIN_VALUE)
    @Cacheable(value = "predictions", key = "#clientId")
    public ResponseEntity<?> predict(@RequestParam(name = "clientId") @Parameter(description = "Идентификатор клиента") Long clientId) {
        long start = System.currentTimeMillis();
        Client client = clientRepository.findById(clientId).orElseThrow(() -> new ClientNotFoundException("Клиент с ID " + clientId + " не найден."));
        log.info("Время на выполнение sql запроса: {}", System.currentTimeMillis() - start);
        String prediction = predictionSignatureService.predictSignature(client);
        log.info("Время на выполнение: {}", System.currentTimeMillis() - start);
        return ResponseEntity.ok().body(prediction);
    }

    @Operation(
            summary = "Получение текущего метода подписи",
            description = "Возвращает текущий метод подписи для клиента."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Успешно получен текущий метод подписи",
                    content = @Content(mediaType = MediaType.TEXT_PLAIN_VALUE)),
            @ApiResponse(responseCode = "404", description = "Клиент не найден")
    })
    @GetMapping("/current-method")
    public ResponseEntity<String> getCurrentMethod(@RequestParam(name = "clientId") @Parameter(description = "Идентификатор клиента") Long clientId) {
        String currentMethod = clientRepository.findById(clientId).orElseThrow(() -> new ClientNotFoundException("Клиент с ID " + clientId + " не найден.")).getCurrentMethod().toString();
        return ResponseEntity.ok().body(currentMethod);
    }

    @Operation(
            summary = "Получение количества жалоб клиента",
            description = "Возвращает количество жалоб (claims) клиента."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Количество жалоб успешно получено",
                    content = @Content(schema = @Schema(type = "integer"))),
            @ApiResponse(responseCode = "404", description = "Клиент не найден")
    })
    @GetMapping("/claims-count")
    public ResponseEntity<Integer> getClaimsCount(@RequestParam(name = "clientId") @Parameter(description = "Идентификатор клиента") Long clientId) {
        Integer countOfClaims = clientRepository.findById(clientId).orElseThrow(() -> new ClientNotFoundException("Клиент с ID " + clientId + " не найден.")).getClaims();
        return ResponseEntity.ok().body(countOfClaims);
    }

    @Operation(
            summary = "Получение доступных методов подписи",
            description = "Возвращает список доступных методов подписи на основе наличия мобильного приложения у клиента."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Доступные методы успешно получены",
                    content = @Content(mediaType = MediaType.APPLICATION_JSON_VALUE,
                            schema = @Schema(type = "array"))),
            @ApiResponse(responseCode = "404", description = "Клиент не найден")
    })
    @GetMapping("/allowed-signatures")
    public ResponseEntity<Set<String>> getAllowedSignatures(@RequestParam(name = "clientId") @Parameter(description = "Идентификатор клиента") Long clientId) {
        Boolean hasApplication = clientRepository.findById(clientId).orElseThrow(() -> new ClientNotFoundException("Клиент с ID " + clientId + " не найден.")).getMobileApp();
        Set<String> allowedMethods = AllowedSignaturesResolver.getAllowedSignatures(hasApplication);
        return ResponseEntity.ok().body(allowedMethods);
    }

    @Operation(
            summary = "Предсказание на основе документа",
            description = "Возвращает предсказанный метод подписи на основе переданных данных."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Предсказание успешно выполнено",
                    content = @Content(mediaType = MediaType.TEXT_PLAIN_VALUE)),
            @ApiResponse(responseCode = "400", description = "Неверные данные запроса")
    })
    @PostMapping("/predict-on-document")
    public ResponseEntity<String> predictOnDocument(@RequestBody PredictionRequestPayload payload) {
        Client client = clientRepository.findById(payload.clientId()).orElseThrow(() -> new ClientNotFoundException("Клиент с ID " + payload.clientId() + " не найден."));
        String prediction = predictionSignatureService.predictSignature(client);
        clientService.updateClient(client, payload.documentId(), payload.platformType());
        return ResponseEntity.ok().body(prediction);
    }
    @Operation(
            summary = "Смена подписи использувоемой клиентом",
            description = "Смена подписи использувоемой клиентом."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Подпись изменена",
                    content = @Content(mediaType = MediaType.TEXT_PLAIN_VALUE)),
            @ApiResponse(responseCode = "400", description = "Ошибка")
    })
    @PatchMapping("/change-signature")
    @CacheEvict(value = {"predictions", "clients"}, key = "#clientId")
    public ResponseEntity<String> changeCurrentSignature(
            @RequestParam(name = "clientId") Long clientId,
            @RequestParam(name = "signature") SignatureMethod signature){
        Client client = clientRepository.findById(clientId).orElseThrow(() -> new ClientNotFoundException("Клиент с ID " + clientId + " не найден."));
        client.setCurrentMethod(signature);
        clientRepository.save(client);

        return ResponseEntity.ok("Подпись успешно изменена на " + signature.name());
    }
}