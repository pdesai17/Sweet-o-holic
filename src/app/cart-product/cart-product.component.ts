import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../types/product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  @Input() cartProduct: Product = {} as Product;
  sum: number = 0;
  constructor() {}

  ngOnInit(): void {}

  getTotal() {
    this.sum += this.cartProduct.price;
    console.log(this.sum);
  }
}
