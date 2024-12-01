package com.alfa.backend.service;

import com.alfa.backend.entity.Client;
import com.alfa.backend.payload.UserPayloadForModel;
import com.alfa.backend.utils.ClientMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class PredictionSignatureService {
    private final WebClient predictionSignatureWebClient;

    public String predictSignature(Client client) {
        UserPayloadForModel payload = ClientMapper.toDto(client);
        return predictionSignatureWebClient
                .post()
                .uri("/predict")
                .body(Mono.just(payload), Client.class)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
