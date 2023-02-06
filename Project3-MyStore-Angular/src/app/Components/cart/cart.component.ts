import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product/product.model';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fullName!: string;
  address!: string;
  creditCard!: string;
  cartList1: Cart[] = [];
  cartList:Product[] = [];
  orderForm! : Order;
  total! : number;
  constructor(private cartService: CartService, private route:Router) { 
  }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartProduct();
    this.total = this.cartService.getTotal();
  }

  calculateTotal(productList : Product [] ) : number {
    let total = 0;
    productList.forEach((product) => {
      total += (Number(product.price) * Number(product.amount));
    });
    return total;
  }
  
  onSubmit(): void {
    this.orderForm = {
      fullName : this.fullName,
      totalPrice : this.total,
      address :this.address,
      creditCard:this.creditCard,
    }
    this.cartService.setOrder(this.orderForm);
    this.route.navigate(['/order']);
  }
  


}
