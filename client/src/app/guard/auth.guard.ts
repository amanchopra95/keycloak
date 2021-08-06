import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  protected authenticated:boolean;
  protected roles: string[];

  constructor(
    protected readonly router: Router,
    protected readonly oauth: OAuthService
  ) {
    // super(router, keycloak);
    this.authenticated = false
    this.roles = []
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise(async (resolve, reject) => {
      try {
        this.authenticated = this.oauth.hasValidAccessToken()
        const userProfile = await this.oauth.loadUserProfile()
        console.log(userProfile)
        const claims = this.oauth.getIdentityClaims()
        console.log(claims)
        const result = await this.isAccessAllowed(route, state)
        resolve(result)
      } catch (err) {
        reject(err)
      }
    })
  }

  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Promise<boolean | UrlTree> {
    if (!this.authenticated) {
      this.router.navigate(['login'])
      // try {

      //   this.router.navigate(['login'])

      //   // const resp = await this.keycloak.login({
      //   //   redirectUri: window.location.origin + state.url,
      //   // })

      //   // this.router.navigate(['login'])

      // } catch (err) {

      // }
    }
    return this.authenticated
  }
  
}
