package com.alfa.backend.service;

import com.alfa.backend.entity.Client;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import com.alfa.backend.payload.Prediction;
import reactor.core.publisher.Mono;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PredictionSignatureService {
    private final WebClient predictionSignatureWebClient;

    // понятно что должно быть дто и для модели эти данные не важны, но мы уже сделали модель и там может все поломаться
    public String predictSignature(Client client) {
        return predictionSignatureWebClient
                .post()
                .uri("/predict")
                .body(Mono.just(client), Client.class)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
