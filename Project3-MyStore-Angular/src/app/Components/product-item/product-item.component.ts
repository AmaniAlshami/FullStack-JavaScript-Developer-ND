import { Component, OnInit , Input} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {Product} from '../../models/product/product.model'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input() product!: Product;
 amount!: number;
 
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  addToCart(product : Product): void {
    product.amount = this.amount;
    this.cartService.addToCart(product);
    alert("Added!");
  }
}
