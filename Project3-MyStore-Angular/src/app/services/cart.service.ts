import { Injectable } from '@angular/core';
import {Cart} from '../models/cart.model'
import { Order } from '../models/order.model';
import { Product } from '../models/product/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: Cart;
  cartList1:Cart[] = [];
  cartList:Product[] = [];
  order!:Order;
  constructor() { }

  getCartProduct() {
    return this.cartList;
  }

  addToCart(product : Product) {
    this.cartList.push(product);
    return this.cartList;
  }

  setOrder(order : Order){
    this.order = order;
  }
  getOrder(){
    return this.order;
  }
}
