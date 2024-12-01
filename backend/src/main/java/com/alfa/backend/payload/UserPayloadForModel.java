package com.alfa.backend.payload;

import com.alfa.backend.enums.Role;
import com.alfa.backend.enums.Segment;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPayloadForModel {
    @Enumerated(EnumType.STRING)
    @NotNull
    @NotBlank
    private Segment segment;

    @Enumerated(EnumType.STRING)
    @NotNull
    @NotBlank
    private Role role;

    @NotNull
    private Boolean mobileApp;

    @NotNull
    @NotBlank
    private String availableMethods;

    @NotNull
    @Min(value = 0)
    private Integer claims;

    @NotNull
    @Min(value = 0)
    private Integer signedDocumentsBasicMobile;

    @NotNull
    @Min(value = 0)
    private Integer signedDocumentsBasicWeb;

    @NotNull
    @Min(value = 0)
    private Integer signedDocumentsImportantMobile;

    @NotNull
    @Min(value = 0)
    private Integer signedDocumentsImportantWeb;
}
