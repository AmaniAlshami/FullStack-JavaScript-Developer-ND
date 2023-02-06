import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { HeaderComponent } from './Layout/header/header.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { ProductItemDetailComponent } from './Components/product-item-detail/product-item-detail.component';
import { CartComponent } from './Components/cart/cart.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { OrderComponent } from './Components/order/order.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    CartComponent,
    NavBarComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
