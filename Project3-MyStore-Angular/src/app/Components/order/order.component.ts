import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order!:Order;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.order =  this.cartService.getOrder();
  }

}
