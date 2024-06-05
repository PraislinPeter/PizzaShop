import { Pizza } from "./pizza";

export class CartItem {
    pizza: Pizza;
    quantity: number;

    constructor(pizza: Pizza) {
        this.pizza = pizza;
        this.quantity = 1; // Default quantity
        this.price;
    }
    get price():number{
        return this.pizza.price * this.quantity;
    }
}
