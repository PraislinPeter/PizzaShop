import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Pizza } from './pizza';
@Injectable({
  providedIn: 'root'
})
export class FetchPizzaService {
  APIURL ='http://localhost:8000/get_pizza';
  constructor() { }
  async getAllPizza(): Promise <Pizza[]>{
    const data = await fetch(this.APIURL);
    return await data.json() ?? [];
  }
  // getPizzaById(id:number) : Pizza | undefined{
  //   return this.pizzaList.find(pizza =>pizza.id===id)
  // }
}
