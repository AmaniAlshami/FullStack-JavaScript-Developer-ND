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
  }

  getCartProduct(productId : Number) {

    return this.cartList.find(x=> x.id == productId);
  }

  calculateTotal(productList : Product [])  {
    let total = 0;
    productList.forEach((product) => {
      total += (Number(product.price) * Number(product.amount));
    });
     this.total = Math.round(total * 100) / 100;
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

  removrFromCart(product : Product) : Product [] {
    let oldProduct = this.cartList.find(x=> x.id == product.id);
    const updatedCart = this.cartList.filter(function (product) {
      return product.id !== oldProduct?.id;
  });    
     this.calculateTotal(updatedCart);
     return updatedCart;
  }
}
