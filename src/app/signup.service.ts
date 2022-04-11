import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  PATH = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  
  
}