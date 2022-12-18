import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  sum: number = 0;
  constructor() {}

  add(product: Product) {
    this.cart.push(product);
  }

  get() {
    return this.cart;
  }

  remove(product: Product) {
    this.cart = this.cart.filter((prod) => prod != product);
  }

  isPresent(product: Product) {
    if (this.cart.filter((prod) => (prod = product))) {
      console.log('present');
      return true;
    } else {
      console.log('not present');
      return false;
    }
  }
}
