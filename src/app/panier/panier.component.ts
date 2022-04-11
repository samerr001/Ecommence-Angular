import { Component, OnInit } from '@angular/core';
import { PanierserviceService } from '../panierservice.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  prodArray = [];

  constructor(private service:PanierserviceService) { 
    
  }

  ngOnInit() {
    this.service.getAll().subscribe((res) => {
      this.prodArray = res;

    })
  }
  del(event, i){
    this.service.delOne(i.id).subscribe((res) => {
      this.service.getAll().subscribe((res) => {
        this.prodArray = res;
  
      })
    })
  }

}
