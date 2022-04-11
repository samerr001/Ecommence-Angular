import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
    public router:Router) { }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      const allowedRoles = next.data.role;
      //console.log(allowedRoles);
      const isAuthorized = this.hardcodedAuthenticationService.isAuthorized(allowedRoles);
  
      if (!isAuthorized) {
        this.router.navigate(['accessdenied']);
      }
  
      return isAuthorized;
    }
}



