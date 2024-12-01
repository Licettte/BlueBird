package com.alfa.backend.controller;

import com.alfa.backend.entity.Document;
import com.alfa.backend.repository.DocumentRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Slf4j
public class DocumentController {

    private final DocumentRepository documentRepository;

    @Operation(
            summary = "Получение подписанных документов клиента",
            description = "Возвращает список всех подписанных документов для указанного клиента."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Список подписанных документов успешно получен",
                    content = @Content(
                            mediaType = "application/json",
                            array = @ArraySchema(schema = @Schema(implementation = Document.class))
                    )
            ),
            @ApiResponse(responseCode = "404", description = "Клиент не найден или документы отсутствуют"),
            @ApiResponse(responseCode = "400", description = "Некорректный запрос, отсутствует clientId")
    })
    @GetMapping("/signed-docs")
    public ResponseEntity<List<Document>> getSignedDocs(
            @RequestParam
            @Parameter(description = "Идентификатор клиента, для которого нужно получить подписанные документы", required = true)
            Long clientId
    ) {
        List<Document> signedDocuments = documentRepository
                .findDocumentByClientIdAndIsSigned(clientId, true);

        return ResponseEntity.ok(signedDocuments);
    }

    @Operation(
            summary = "Подписание документа",
            description = "Позволяет подписать документ, устанавливая флаг isSigned в true."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Документ успешно подписан"
            ),
            @ApiResponse(
                    responseCode = "404",
                    description = "Документ с указанным ID не найден"
            )
    })
    @PatchMapping("/sign-document")
    public ResponseEntity<String> signDocument(
            @RequestParam(name = "documentId")
            @Parameter(description = "Идентификатор документа, который нужно подписать", required = true)
            Long documentId) {
        Document document = documentRepository.findById(documentId).orElseThrow();
        document.setIsSigned(true);
        documentRepository.save(document);

        return ResponseEntity.ok("Документ успешно подписан");
    }
}
