import { AuthConfig } from "angular-oauth2-oidc"

const authConfig: AuthConfig = {
    issuer: "http://localhost:8080/auth/realms/node-ms",
    redirectUri: "http://localhost:4200",
    postLogoutRedirectUri: "http://localhost:4200/login",
    clientId: "frontend",
    scope: "openid",
}

export const authConfigPassword: AuthConfig = {
    ...authConfig,
    oidc: false
}