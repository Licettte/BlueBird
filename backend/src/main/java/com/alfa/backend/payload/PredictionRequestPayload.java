package com.alfa.backend.payload;

import com.alfa.backend.enums.PlatformType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public record PredictionRequestPayload (
    Long clientId,
    Long documentId,
    @Enumerated(EnumType.STRING)
    PlatformType platformType
){}
