  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JWTToken } from '../models/JWTToken';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { listenToElementOutputs } from '@angular/core/src/view/element';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  BASE_PATH = 'http://localhost:8080';
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  public username: string;
  public token: string;

  constructor(private http: HttpClient,private jwtHelperService: JwtHelperService) { }

  executeJwtAuthenticationService(username, password) {
    console.log(username);
    return this.http.post(`${this.BASE_PATH}/authenticate`, {
      username,
      password
    }).pipe(map((res: JWTToken) => {
      this.username = username;
      this.token = res.token;
      this.registerSuccessfulLoginForJwt(username);
    }));
  }

  create(data){
    return this.http.post(`${this.BASE_PATH}/create`,{

      "nom": data.username,
	    "prenom":data.familyName,
	    "adresse":data.adresse,
	    "email":data.email,
	    "motdepasse":data.inputPassword,
	    "confirmmotdepasse":data.confirmPassword,
	    "cin":data.cin,
      "tel":data.tel
      
    }).pipe(map((res:JWTToken)=>{
      this.username = data.username;
      this.token = res.token;
      this.registerSuccessfulLoginForJwt(data.username);
    }));
  }
  createJWTToken(token) {
    return 'Bearer ' + token
  }
  registerSuccessfulLoginForJwt(username) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.token = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
  isAuthorized(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    // get token from local storage or state management
    const token = localStorage.getItem('token');

    // decode token to read the payload details
    const decodeToken = this.jwtHelperService.decodeToken(this.token.toString());
    console.log(decodeToken['roles']);

    // check if it was decoded successfully, if not the token is not valid, deny access
    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    //return allowedRoles.includes(decodeToken['roles']);
    for (let i = 0; i <decodeToken['roles'].length; i++){
      if (allowedRoles.includes(decodeToken['roles'][i])){
        return true;
      }
    }
   
    return false;
  }
}
