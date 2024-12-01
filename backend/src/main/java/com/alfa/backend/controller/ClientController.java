package com.alfa.backend.controller;

import com.alfa.backend.entity.Client;
import com.alfa.backend.repository.ClientRepository;
import com.alfa.backend.service.PredictionSignatureService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Slf4j
public class ClientController {
    private final ClientRepository clientRepository;
    private final PredictionSignatureService predictionSignatureService;

    @GetMapping("/client")
    public ResponseEntity<?> getClientById(@RequestParam(name = "clientId") Long clientId) {
        Client client = clientRepository.findById(clientId).get();
        return ResponseEntity.ok().body(client);
    }

    @GetMapping(value = "/predict", produces = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<?> predict(@RequestParam(name = "clientId") Long clientId) {
        long start = System.currentTimeMillis();
        Client client = clientRepository.findById(clientId).get();
        log.info("Время на выполнение sql запроса: {}", System.currentTimeMillis() - start);
        String prediction = predictionSignatureService.predictSignature(client);
        log.info("Время на выполнение: {}", System.currentTimeMillis() - start);
        return ResponseEntity.ok().body(prediction);
    }
}