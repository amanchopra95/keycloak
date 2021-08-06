import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeKeycloak } from './init/keycloak-init.factory';
import { KeycloakAngularModule } from 'keycloak-angular';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [OAuthService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
