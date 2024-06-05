import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { Pizza } from './pizza';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FetchPizzaService } from './fetch-pizza.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PizzaShop';
  pizzaList: Pizza []=[];
  pizza : FetchPizzaService=inject(FetchPizzaService);
  constructor (){
    this.pizzaList = this.pizza.getAllPizza();
  }

}