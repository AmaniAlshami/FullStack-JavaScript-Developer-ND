import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {Product} from '../../models/product/product.model'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 @Input() product!: Product;
 @Input() canRemove!: boolean;
 @Input() canAdd!: boolean;
 @Output() total = new EventEmitter();
 @Output() update = new EventEmitter();

 
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    let cart = this.cartService.getCartProduct(Number(this.product.id));
    this.product["amount"] = cart?.amount
    
  }

  addToCart(product : Product): void {
    if(product.amount == null )
        alert("Please select the amount");
    else{
    this.cartService.addToCart(product);
    alert(`${product.amount} Added!`);}
  }
}
