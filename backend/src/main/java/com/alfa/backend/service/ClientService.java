package com.alfa.backend.service;

import com.alfa.backend.entity.Client;
import com.alfa.backend.entity.Document;
import com.alfa.backend.enums.DocumentType;
import com.alfa.backend.enums.PlatformType;
import com.alfa.backend.repository.ClientRepository;
import com.alfa.backend.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClientService {
    private final ClientRepository clientRepository;
    private final DocumentRepository documentRepository;

    @CacheEvict(value = {"predictions", "clients"}, key = "#client.clientId")
    public void updateClient(Client client, Long documentId, PlatformType platformType) {
        Document document = documentRepository.findById(documentId).orElseThrow();
        switch (platformType){
            case desktop -> {
                if(document.getType() == DocumentType.basic){
                    client.setSignedDocumentsBasicWeb(client.getSignedDocumentsBasicWeb() + 1);
                    clientRepository.save(client);
                } else {
                    client.setSignedDocumentsImportantWeb(client.getSignedDocumentsImportantWeb() + 1);
                    clientRepository.save(client);
                }
            } case mobile -> {
                if(document.getType() == DocumentType.basic){
                    client.setSignedDocumentsBasicMobile(client.getSignedDocumentsBasicMobile() + 1);
                    clientRepository.save(client);
                } else {
                    client.setSignedDocumentsImportantWeb(client.getSignedDocumentsImportantMobile() + 1);
                    clientRepository.save(client);
                }
            }
        }
    }
}
