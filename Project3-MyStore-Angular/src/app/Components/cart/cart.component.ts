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
  creditCardvalidate!: string;
  canRemove: boolean = true;
  constructor(private cartService: CartService, private route:Router) { 
    this.total = this.cartService.getTotal();
  }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartProducts();
  }

  getTotal(cart : Product) : void{
    this.cartService.addToCart(cart);
    this.total = this.cartService.getTotal();
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
  update(product : Product) : void{
    this.cartList = this.removeFromCart(product);
    this.total = this.cartService.getTotal();
  }

  removeFromCart(product : Product)  {
    alert(`${product.title} Removed!`);
    return this.cartService.removrFromCart(product);
  }
  validateCreditCard() {
    if(this.creditCard.length != 10)
      this.creditCardvalidate = "Entre valid credit card 10 digits"
    else
    this.creditCardvalidate = "";

  }


}
