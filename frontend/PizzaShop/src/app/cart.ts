import { CartItem } from "./cart-item";

export class Cart {
    items: CartItem[];

    constructor() {
        this.items = []; // Initialize items as an empty array
    }
    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item=>{
            totalPrice +=item.price;
        })
        return totalPrice;
    }
}

