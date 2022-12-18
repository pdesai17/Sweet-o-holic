import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent implements OnInit {
  carts: Product[] = [];
  sum: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  getCart() {
    this.carts = this.cartService.get();
    return this.cartService.get();
  }

  getTotal() {
    for (let index = 0; index < this.carts.length; index++) {
      this.sum += this.carts[index].price;
    }
    return this.sum;
  }
}
