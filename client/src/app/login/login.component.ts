import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from '../auth.service';
import { OAuthService } from 'angular-oauth2-oidc'

type IData = {
  access_token: string
  id_token: string
  refresh_token: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg?: string;
  username?: string;
  password?: string;
  retUrl: string | null = "";

  constructor(
    private authService: AuthService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private keycloakService: KeycloakService,
    private oauthService: OAuthService) { 

  }

  async ngOnInit(): Promise<void> {
    // const isLoggedIn = await this.keycloakService.isLoggedIn()
    // if (isLoggedIn) {
    //   this.router.navigate([''])
    // }
    // this.activatedRoute.queryParamMap
    //   .subscribe(params => {
    //     this.retUrl = params.get('retUrl')
    //   })
  }

  async onFormSubmit (loginForm:any) {
    console.log(loginForm)
    try {

      await this.authService.loginUsingOAuth(loginForm.form.value.username, loginForm.form.value.password)
      console.log(this.oauthService.getAccessToken())
      const loggedIn = this.oauthService.hasValidAccessToken()
      console.log(loggedIn)
      // this.router.navigate([''])
    } catch(err) {
      console.error(err)
    }
      // let tokens = <IData>data
      // this.oauthService.initLoginFlow()
  }

}
