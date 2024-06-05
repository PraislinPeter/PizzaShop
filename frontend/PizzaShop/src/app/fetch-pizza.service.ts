import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Pizza } from './pizza';
@Injectable({
  providedIn: 'root'
})
export class FetchPizzaService {
  protected pizzaList :Pizza[]=[ {id : 1, name: "name", price: 2}];
  constructor() { }
  getAllPizza():Pizza[]{
    return this.pizzaList;
  }
  getPizzaById(id:number) : Pizza | undefined{
    return this.pizzaList.find(pizza =>pizza.id===id)
  }
}
