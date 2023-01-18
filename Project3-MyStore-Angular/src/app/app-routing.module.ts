import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductItemDetailComponent } from './Components/product-item-detail/product-item-detail.component';
import { CartComponent } from './Components/cart/cart.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
