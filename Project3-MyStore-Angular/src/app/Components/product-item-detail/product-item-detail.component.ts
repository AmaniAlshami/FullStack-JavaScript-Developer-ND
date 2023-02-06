import { Component, OnInit } from '@angular/core';
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
  amount!: number;
  
  constructor(private cartService: CartService, private productService:  ProductService,
    private route:ActivatedRoute) {
   }
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data;
    });
  }

  addToCart(product : Product): void {
    product.amount = this.amount;
    this.cartService.addToCart(product);
    alert(`${this.amount} Added!`);
    //alert("Added!");
  }
}
