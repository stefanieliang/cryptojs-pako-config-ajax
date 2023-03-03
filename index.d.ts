export interface OpenapiStatic {
    dealRequestBody(source: string, security_key: string | null, level: string | null): string,
    dealResponseBody(source: string, security_key: string | null, level: string | null): string
}

declare const openapi: OpenapiStatic;

export default openapi;