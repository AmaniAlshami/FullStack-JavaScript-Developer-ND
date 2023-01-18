import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fullName!: string;
  address!: string;
  creditCard!: string;

 orderForm : Order;
  constructor() { 
    this.orderForm = {
      fullName : '',
      totalPrice : 100,
      address :'',
      creditCard:'',
      poducts : [

      ],

    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
