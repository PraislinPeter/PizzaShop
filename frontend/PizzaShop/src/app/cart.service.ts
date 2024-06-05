import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Pizza } from './pizza';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart();

  constructor() { }
  addToCart(pizza:Pizza):void{
    let cartItem=this.cart.items.find(item=>item.pizza.id===pizza.id)
    if (cartItem){
      this.changeQuantity(pizza.id,cartItem.quantity+1);
      return;
    }
    this.cart.items.push(new CartItem(pizza))
  }
  removeFromCart(foodId:number): void{
    this.cart.items = this.cart.items.filter(item => item.pizza.id != foodId);
  }
  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.pizza.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
