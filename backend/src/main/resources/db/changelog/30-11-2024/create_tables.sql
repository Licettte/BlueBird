CREATE TABLE client
(
    client_id                         SERIAL PRIMARY KEY,
    organization_id                   INTEGER     NOT NULL,
    segment                           VARCHAR(50) NOT NULL,
    role                              VARCHAR(50) NOT NULL,
    mobile_app                        BOOLEAN     NOT NULL,
    available_methods                 TEXT        NOT NULL,
    claims                            INTEGER     NOT NULL,
    signed_documents_basic_mobile     INTEGER     NOT NULL,
    signed_documents_basic_web        INTEGER     NOT NULL,
    signed_documents_important_mobile INTEGER     NOT NULL,
    signed_documents_important_web    INTEGER     NOT NULL
);

CREATE TABLE document
(
    document_id SERIAL PRIMARY KEY,
    type        VARCHAR(10) NOT NULL,
    client_id   BIGINT REFERENCES client (client_id),
    platform    VARCHAR(10) NOT NULL,
    date        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    contractor  VARCHAR(50) NOT NULL
);