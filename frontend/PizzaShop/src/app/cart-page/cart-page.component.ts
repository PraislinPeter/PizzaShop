import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService:CartService){}
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.pizza.id);
     this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.pizza.id, quantity);
    this.setCart();
  }
  setCart(){
  this.cart= this.cartService.getCart();
  }

}
