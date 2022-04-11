import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Produit} from './models/Produit'

@Injectable({
  providedIn: 'root'
})
export class PanierserviceService {
  PATH = "http://localhost:8080/panierRestOperations";

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(`${this.PATH}/panier`).pipe(map((res:Produit[])=>{
      return res;
    }));
  }
  delOne(id){
    return this.http.delete(`${this.PATH}/delete/${id}`).pipe(map((res: Produit[]) => {
      return res;
      
    }));
  }
  add(id){
    return this.http.post(`${this.PATH}/add/${id}`,{});

  }
}