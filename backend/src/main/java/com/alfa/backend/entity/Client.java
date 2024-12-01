package com.alfa.backend.entity;

import com.alfa.backend.enums.Role;
import com.alfa.backend.enums.Segment;
import com.alfa.backend.utils.StringListConverter;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "client")
@Getter
@Setter
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id")
    private Long clientId;

    @Column(name = "organization_id", nullable = false)
    private Integer organizationId;

    @Column(name = "segment", nullable = false, length = 50)
    @Enumerated(EnumType.STRING)
    @JsonProperty("segment")
    private Segment segment;

    @Column(name = "role", nullable = false, length = 50)
    @Enumerated(EnumType.STRING)
    @JsonProperty("role")
    private Role role;

    @Column(name = "mobile_app", nullable = false)
    private Boolean mobileApp;

    @Column(name = "available_methods", nullable = false, columnDefinition = "TEXT")
    @Convert(converter = StringListConverter.class)
    private List<String> availableMethods;

    @Column(name = "claims", nullable = false)
    private Integer claims;

    @Column(name = "signed_documents_basic_mobile", nullable = false)
    private Integer signedDocumentsBasicMobile;

    @Column(name = "signed_documents_basic_web", nullable = false)
    private Integer signedDocumentsBasicWeb;

    @Column(name = "signed_documents_important_mobile", nullable = false)
    private Integer signedDocumentsImportantMobile;

    @Column(name = "signed_documents_important_web", nullable = false)
    private Integer signedDocumentsImportantWeb;
}
