import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { Pizza } from './pizza';
import { CommonModule } from '@angular/common';
import { FetchPizzaService } from './fetch-pizza.service';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
 import { CartService } from './cart.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PizzaShop';
  pizzaList: Pizza[] = [];
  filteredPizzaList: Pizza[] = [];
  pizza: FetchPizzaService;

  constructor(fetchPizzaService: FetchPizzaService) {
    this.pizza = fetchPizzaService;
    this.pizza.getAllPizza().then((pizzaList: Pizza[]) => {
      this.pizzaList = pizzaList;
      this.filteredPizzaList = this.pizzaList; // Move assignment here
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredPizzaList = this.pizzaList;
      return;
    }

    this.filteredPizzaList = this.pizzaList.filter(
      pizza => pizza?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
