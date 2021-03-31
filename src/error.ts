// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export enum ErrorCode {
    ERROR = 100,
    DATA_FILE_NOT_FOUND,
    SCHEMA_FILE_NOT_FOUND,
    LOG_PATH_NOT_FOUND,
    SCHEMA_ERROR,
    INFLATION_ERROR,
    JWS_VERIFICATION_ERROR,
    QR_DECODE_ERROR,
    ISSUER_KEY_DOWNLOAD_ERROR,
    INVALID_ISSUER_URL,
    INVALID_NUMERIC_QR,
    INVALID_NUMERIC_QR_HEADER,
    MISSING_QR_CHUNK,
    UNBALANCED_QR_CHUNKS,
    NOT_IMPLEMENTED,
    UNKNOWN_FILE_DATA,
    JSON_PARSE_ERROR,
    CRITICAL_DATA_MISSING,
    JWS_TOO_LONG,
    INVALID_FILE_EXTENSION,
    TRAILING_CHARACTERS,
    
    INVALID_KEY_MISSING_KTY = 200,
    INVALID_KEY_WRONG_KTY,
    INVALID_KEY_MISSING_ALG,
    INVALID_KEY_WRONG_ALG,
    INVALID_KEY_MISSING_USE,
    INVALID_KEY_WRONG_USE,
    INVALID_KEY_MISSING_KID,
    INVALID_KEY_WRONG_KID,
    INVALID_KEY_SCHEMA,
    INVALID_KEY_PRIVATE,
    INVALID_KEY_UNKNOWN
}
