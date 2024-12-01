package com.alfa.backend.utils;

import com.alfa.backend.entity.Client;
import com.alfa.backend.payload.UserPayloadForModel;
import lombok.experimental.UtilityClass;

@UtilityClass
public class ClientMapper {

    public static UserPayloadForModel toDto(Client client) {
        if (client == null) {
            return null;
        }

        UserPayloadForModel dto = new UserPayloadForModel();
        dto.setSegment(client.getSegment());
        dto.setRole(client.getRole());
        dto.setMobileApp(client.getMobileApp());
        dto.setAvailableMethods(String.join(",", client.getAvailableMethods()));
        dto.setClaims(client.getClaims());
        dto.setSignedDocumentsBasicMobile(client.getSignedDocumentsBasicMobile());
        dto.setSignedDocumentsBasicWeb(client.getSignedDocumentsBasicWeb());
        dto.setSignedDocumentsImportantMobile(client.getSignedDocumentsImportantMobile());
        dto.setSignedDocumentsImportantWeb(client.getSignedDocumentsImportantWeb());

        return dto;
    }
}

