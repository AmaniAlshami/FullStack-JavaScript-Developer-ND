import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product!: Product;
  productId!:string;
  @Output() total = new EventEmitter();

  constructor(private cartService: CartService, private productService:  ProductService,
    private route:ActivatedRoute) {
   }
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe(data => {
    this.product = data;
    let cart = this.cartService.getCartProduct(Number(this.product.id));
    this.product["amount"] = cart?.amount
    });
    
  }


  addToCart(product : Product): void {
    if(product.amount == null )
        alert("Please select the amount");
    else{
    this.cartService.addToCart(product);
    alert(`${product.amount} Added!`);}
  }
}
