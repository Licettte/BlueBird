package com.alfa.backend.utils;

import lombok.experimental.UtilityClass;

import java.util.HashSet;
import java.util.Set;

@UtilityClass
public class AllowedSignaturesResolver {
    private final Set<String> signaturesSet = Set.of("paycontrol", "qes_application", "qes_token");
    public static Set<String> getAllowedSignatures(Boolean hasMobileApp) {
        Set<String> allowedSignatures = new HashSet<>(signaturesSet);
        if (!hasMobileApp) {
            allowedSignatures.remove("paycontrol");
            allowedSignatures.remove("qes_application");
        }

        return allowedSignatures;
    }
}
