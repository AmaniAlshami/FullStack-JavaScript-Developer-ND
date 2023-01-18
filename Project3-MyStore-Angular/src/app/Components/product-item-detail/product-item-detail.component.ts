import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product.model';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  
  constructor() {
    this.product = 
    {
      id:1,
      name: 'Glasses',
      price: 129.99,
      url: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Now you can see!"
    }
   }
  ngOnInit(): void {
  }

}
