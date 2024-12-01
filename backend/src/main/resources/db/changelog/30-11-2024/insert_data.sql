-- Заполнение таблицы client
INSERT INTO client (client_id, organization_id, segment, role, mobile_app, available_methods, claims,
                    signed_documents_basic_mobile, signed_documents_basic_web,
                    signed_documents_important_mobile, signed_documents_important_web)
VALUES (1, 5, 'small', 'employee', false, '["sms"]', 6, 0, 7, 0, 9),
       (2, 5, 'large', 'director', false, '["qes_application", "sms", "paycontrol", "qes_token"]', 8, 2, 13, 3, 6),
       (3, 2, 'medium', 'director', false, '["qes_application", "sms", "qes_token", "paycontrol"]', 8, 2, 6, 4, 15),
       (4, 8, 'large', 'employee', true, '["sms", "paycontrol"]', 0, 2, 15, 1, 10),
       (5, 1, 'small', 'employee', true, '["paycontrol", "sms", "qes_token", "qes_application"]', 4, 1, 10, 0, 10),
       (6, 8, 'large', 'director', false, '["paycontrol", "qes_token"]', 4, 2, 7, 1, 13),
       (7, 6, 'large', 'director', true, '["paycontrol"]', 7, 5, 12, 4, 7),
       (8, 6, 'large', 'employee', false, '["qes_token", "paycontrol", "sms", "qes_application"]', 6, 2, 9, 0, 14),
       (9, 2, 'medium', 'director', true, '["qes_token", "qes_application", "sms"]', 10, 4, 6, 3, 6),
       (10, 9, 'small', 'director', true, '["sms", "paycontrol", "qes_token"]', 5, 0, 15, 2, 10);

-- Заполнение таблицы document
INSERT INTO document (type, client_id, platform, contractor)
VALUES ('basic', 1, 'desktop', 'Company A'),
       ('important', 1, 'desktop', 'Company B'),
       ('basic', 2, 'mobile', 'Company C'),
       ('important', 2, 'mobile', 'Company D'),
       ('basic', 3, 'desktop', 'Company E'),
       ('important', 3, 'mobile', 'Company F'),
       ('basic', 4, 'mobile', 'Company G'),
       ('important', 4, 'desktop', 'Company H'),
       ('basic', 5, 'mobile', 'Company I'),
       ('important', 5, 'desktop', 'Company J'),
       ('basic', 6, 'desktop', 'Company K'),
       ('important', 6, 'mobile', 'Company L'),
       ('basic', 7, 'mobile', 'Company M'),
       ('important', 7, 'desktop', 'Company N'),
       ('basic', 8, 'desktop', 'Company O'),
       ('important', 8, 'mobile', 'Company P'),
       ('basic', 9, 'mobile', 'Company Q'),
       ('important', 9, 'desktop', 'Company R'),
       ('basic', 10, 'desktop', 'Company S'),
       ('important', 10, 'mobile', 'Company T');
