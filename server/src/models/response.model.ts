export interface Response {
    message?: string;
    errors?: Error[];

    [propName: string]: any;
}

export interface Error {
    resource: string;
    field: string;
    code: ErrorCode
}

export enum ErrorCode {
    // Resource does not exist.
    missing,
        // Required field on a resource has not been set.
    missing_field,
        // Formatting of a field is invalid.
    invalid,
        // Another resource has the same value as this field.
        // This can happen in resources that must have some unique key (such as Label names).
    already_exists
}

export function createResponse<T>(obj: T): Response {
    return obj;
}
