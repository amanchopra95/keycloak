import { KeycloakAdapter, KeycloakLoginOptions, KeycloakLogoutOptions, KeycloakPromise, KeycloakPromiseCallback, KeycloakRegisterOptions } from "keycloak-js";


export class CustomAdaptor implements KeycloakAdapter {
    login(options?: KeycloakLoginOptions): KeycloakPromise<void, void> {
        // window.location.href = "http://localhost:4200/login"
        throw new Error("Method not implemented.");
    }
    logout(options?: KeycloakLogoutOptions): KeycloakPromise<void, void> {
        throw new Error("Method not implemented.");
    }
    register(options?: KeycloakRegisterOptions): KeycloakPromise<void, void> {
        throw new Error("Method not implemented.");
    }
    accountManagement(): KeycloakPromise<void, void> {
        throw new Error("Method not implemented.");
    }
    redirectUri(options: { redirectUri: string; }, encodeHash: boolean): string {
        throw new Error("Method not implemented.");
    }
    
}
