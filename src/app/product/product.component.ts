import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {} as Product;
  cart: Product[] = [];
  @Input() catName: string = '';
  //isInCart: Boolean = false;

  constructor(private cartService: CartService) {
    //console.log('constructor called');
  }

  ngOnInit(): void {
    //this.cart = this.cartService.get();
    //this.isPresentInCart();
    //console.log('ffd', this.catName);
  }

  addToCart() {
    //this.isInCart = true;
    this.cartService.add(this.product);
  }

  // removeFromCart() {
  //   this.isInCart = false;
  //   this.cartService.remove(this.product);
  // }

  // isPresentInCart() {
  //   const res = this.cartService.get();
  //   console.log(res);
  //   if (this.cartService.get().filter((prod) => prod == this.product)) {
  //     console.log('present');
  //     //this.isInCart = true;
  //   } else {
  //     console.log('not present');
  //     //this.isInCart = false;
  //   }
  // }
}
