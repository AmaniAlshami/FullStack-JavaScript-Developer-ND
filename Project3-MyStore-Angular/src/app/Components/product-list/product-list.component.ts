import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product/product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {
        id:1,
        name: 'Glasses',
        price: 129.99,
        url: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Now you can see!"
      },
      {
        id:2,
        name: "Backpack",
        price: 79.99,
        url: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Carry things around town!"  
      },
      {
        id:3,
        name: "Cup",
        price: 79.99,
        url: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description:  "Drink anything with it!" 
      }
    ]
  }
}
