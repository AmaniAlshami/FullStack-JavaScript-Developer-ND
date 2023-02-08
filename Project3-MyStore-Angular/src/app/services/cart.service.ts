import { Injectable } from '@angular/core';
import {Cart} from '../models/cart.model'
import { Order } from '../models/order.model';
import { Product } from '../models/product/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: Cart;
  product! : Product;
  cartList:Product[] = [];
  order!:Order;
  total! : number;

  constructor() { }

  getCartProducts() {
    return this.cartList;
  }

  addToCart(newproduct : Product) {

    let product = this.cartList.find(x=> x.id == newproduct.id);
    if(product != null && product.id == newproduct.id)
      {
        product.amount = Number(newproduct.amount);
      }
    else
        this.cartList.push(newproduct);
  
    return this.calculateTotal(this.cartList);
    //return this.cartList;
  }

  getCartProduct(productId : Number) {

    return this.cartList.find(x=> x.id == productId);
  }

  calculateTotal(productList : Product [])  {
    let total = 0;
    productList.forEach((product) => {
      total += (Number(product.price) * Number(product.amount));
    });
     this.total = total;
  }

  getTotal() : number {
    return this.total;
  }
  setOrder(order : Order){
    this.order = order;
  }
  getOrder(){
    return this.order;
  }
}
