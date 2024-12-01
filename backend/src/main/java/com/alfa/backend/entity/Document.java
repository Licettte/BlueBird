package com.alfa.backend.entity;

import com.alfa.backend.enums.DocumentType;
import com.alfa.backend.enums.PlatformType;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "document")
@Getter
@Setter
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_id")
    private Long documentId;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    @NotNull
    private DocumentType type;

    @Column(name = "client_id")
    private Long clientId;

    @Column(name = "platform")
    @Enumerated(EnumType.STRING)
    @NotNull
    private PlatformType platformType;

    @Column(name = "date")
    @NotNull
    private LocalDateTime creationDate;

    @Column(name = "is_signed")
    @NotNull
    private Boolean isSigned;

    @Column(name = "contractor")
    @NotNull
    @NotBlank
    private String contractor;
}
