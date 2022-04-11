import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Produit} from './models/Produit'

@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {
  PATH = "http://localhost:8080/produitRestOperations";

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(`${this.PATH}/list`).pipe(map((res:Produit[])=>{
      return res;
    }));
  }
  create(data){
    return this.http.post(`${this.PATH}/add`,{

      "nompdt": data.nompdt,
	    "typepdt":data.typepdt,
	    "couleurpdt":data.couleurpdt,
	    "referencepdt":data.referencepdt,
	    "prixpdt":data.prixpdt,
	    "quantitepdt":data.quantitepdt,
	    "img":data.img
      
      
    });
  }
  delOne(id){
    return this.http.delete(`${this.PATH}/delete/$
    {id}`);
  }
}
