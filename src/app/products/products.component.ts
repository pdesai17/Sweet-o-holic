import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  catProd: any;
  categories = ['all', 'cakes', 'cake sickels', 'chocolate hampers'];
  catName: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
    this.filter('all');
  }

  filter(catName: string) {
    console.log('filter called' + this.products);

    this.catProd = this.products.filter((p: any) => {
      if (p.category == catName || catName == 'all') {
        return p;
      }
    });
    console.log('cat data', this.catProd);
  }
}
