import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ProduitserviceService } from '../produitservice.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { PanierserviceService } from '../panierservice.service';


@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
  formProduct;


  constructor(private service: ProduitserviceService,private router: Router) { }

  ngOnInit() {
    this.formProduct = new FormGroup({
      nompdt : new FormControl(),
      typepdt : new FormControl(),
      couleurpdt : new FormControl(),
      referencepdt : new FormControl(),
      prixpdt : new FormControl(),
      quantitepdt : new FormControl(),
      img : new FormControl()
    })
  }
  onClickSubmit(data){
    this.service.create(data).subscribe((res)=>{
      this.router.navigate(['todos'])
    })
  }

}
