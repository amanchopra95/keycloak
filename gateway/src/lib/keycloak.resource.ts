import KeycloakConnect, { Keycloak, KeycloakConfig } from "keycloak-connect";
import { ExpressSession } from "./session.resource";

export class KeycloakResource {

    private static keycloakResource: KeycloakResource
    private static keycloak: Keycloak

    public static initKeycloak() {
        if (KeycloakResource.keycloak) {
            console.log(KeycloakResource.keycloak)
            return KeycloakResource.keycloak
        } else {
            KeycloakResource.keycloak = new KeycloakConnect({ store: ExpressSession.memoryStore() }, 'keycloak.json')
            return KeycloakResource.keycloak
        }
    }

    public static initiliaze(keycloakConfig:string) {
        let config = <KeycloakConfig>JSON.parse(keycloakConfig)
        console.log(config)
        return new KeycloakConnect({ store: ExpressSession.memoryStore() }, config)
    }

}