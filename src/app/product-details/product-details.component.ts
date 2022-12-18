import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productIdFromRoute = Number(
      this.route.snapshot.paramMap.get('productId')
    );
    this.product = this.productService
      .getProduct()
      .find((product) => product.id === productIdFromRoute);

    console.log(this.product);
  }
}
