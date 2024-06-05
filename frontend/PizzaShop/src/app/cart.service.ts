import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart();

  constructor() { }
}
