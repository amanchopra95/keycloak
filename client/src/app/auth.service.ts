import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean;

  constructor(
    private httpClient: HttpClient,
    private oauthService: OAuthService) { 
    this.isLoggedIn = false
  }

  login(username:string, password: string) {

    let obj: { [key:string]: any} = {
      "client_id": "frontend",
      "username": username,
      "password": password,
      "scope": "openid",
      "grant_type": "password"
    }
    
    let formBody:any = [];
    for (var property in obj) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(obj[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return this.httpClient.post('/auth/realms/dispatch/protocol/openid-connect/token', formBody, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    // .subscribe((data:any) => {
    //   console.log(data)
    //   this.isLoggedIn = true
    //   return this.isLoggedIn
    // })
  }

  async loginUsingOAuth(username: string, password: string) {
    try {
      const resp = await this.oauthService.fetchTokenUsingPasswordFlow(username, password)
      console.log(resp)
      return resp
    } catch (error) {
      return null;
    }
  }

}
