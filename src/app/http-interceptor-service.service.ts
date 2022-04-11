import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private authenticationService: HardcodedAuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('authentication') === -1) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                   //'Authorization': `${this.authenticationService.token}`
                   'Authorization': `'Bearer ${this.authenticationService.token}`
                })
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }

    }
}