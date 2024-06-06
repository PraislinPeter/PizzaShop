import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routeConfig: Routes = [
  { path: 'cart-page', component: CartPageComponent }
];

export default routeConfig;
