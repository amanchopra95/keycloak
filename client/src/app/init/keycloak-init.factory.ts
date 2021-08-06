import { KeycloakService } from "keycloak-angular";
import { KeycloakAdapter } from "keycloak-js";
import { CustomAdaptor } from "../keycloak";

import { OAuthService } from 'angular-oauth2-oidc';
import { authConfigPassword } from '../oauth.config';

type IData = {
    access_token: string
    id_token: string
    refresh_token: string
}

const customAdaptor = new CustomAdaptor()

export function initializeKeycloak(oauthService: OAuthService) {
    oauthService.configure(authConfigPassword)
    oauthService.setStorage(sessionStorage)

    return async () => {
        await oauthService.loadDiscoveryDocumentAndTryLogin({
            onLoginError: (err) => {
                console.error(err)
            }
        })

        if (oauthService.hasValidAccessToken()) {
            console.log("'Yes authenticated")
        } else {
            console.log("Not authenticated")
        }

        return true
    }
}


// export function initializeKeycloak(keycloak: KeycloakService, data:IData): () => Promise<any> {
//     return (): Promise<any>  => {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 if (!data) {
//                     let token = localStorage.getItem('token')
//                     if(token) {
//                         data = <IData>JSON.parse(token)
//                     }
//                 }
//                 await keycloak.init({
//                     config: {
//                         url: 'http://localhost:8080/auth',
//                         realm: 'dispatch',
//                         clientId: 'frontend'
//                     },
//                     initOptions: {
//                         // adapter: customAdaptor,
//                         onLoad: 'login-required',
//                         // silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
//                         // checkLoginIframe: false,
//                         // token: data['access_token'],
//                         // refreshToken: data['refresh_token'],
//                         // idToken: data['id_token'],
//                     },
//                 })
//                 resolve(true)
//             } catch (err) {
//                 reject(err)
//                 // resolve(false)
//             }
//         })
//     }
// }
