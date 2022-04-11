import { Component, OnInit } from '@angular/core';
import { ProduitserviceService } from '../produitservice.service';
import { PanierserviceService } from '../panierservice.service';
export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  prodArray = [];
  constructor(private service: ProduitserviceService, private servicepanier: PanierserviceService) { }

  ngOnInit() {
    this.service.getAll().subscribe((res) => {
      this.prodArray = res;

    })
  }

  addtoCart(event,i){
    this.servicepanier.add(i.id).subscribe();
  }

  delete(event, i){
    this.service.delOne(i.id).subscribe((res) => {
      this.service.getAll().subscribe((res) => {
        this.prodArray = res;
  
      })
    })
  }

}
