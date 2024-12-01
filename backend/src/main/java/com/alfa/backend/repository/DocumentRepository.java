package com.alfa.backend.repository;

import com.alfa.backend.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findDocumentByClientIdAndIsSigned(Long clientId, Boolean isSigned);
}
