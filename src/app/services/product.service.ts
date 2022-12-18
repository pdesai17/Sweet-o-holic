import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProduct() {
    return [
      {
        id: 1,
        name: 'Red Velvet Cake',
        price: 100,
        image: '../../assets/red velvet.png',
        category: 'cakes',
      },
      {
        id: 2,
        name: 'White Forest Cake',
        price: 200,
        image: '../../assets/white forest.png',
        category: 'cakes',
      },
      {
        id: 3,
        name: 'Black Forest Cake',
        price: 399,
        image: '../../assets/black forest.png',
        category: 'cakes',
      },
      {
        id: 4,
        name: 'Black Forest Cake',
        price: 399,
        image: '../../assets/black forest.png',
        category: 'cakes',
      },
      {
        id: 5,
        name: 'Black Forest Cake',
        price: 399,
        image: '../../assets/black forest.png',
        category: 'cakes',
      },
      {
        id: 6,
        name: 'Black Forest Cake',
        price: 199,
        image: '../../assets/black forest.png',
        category: 'cakes',
      },
      {
        id: 7,
        name: 'Chocolate CakeSickle',
        price: 199,
        image: '../../assets/chocolate-sickle.png',
        category: 'cake sickels',
      },
      {
        id: 8,
        name: 'White Chocolate CakeSickle',
        price: 199,
        image: '../../assets/white-sickel.png',
        category: 'cake sickels',
      },
      {
        id: 9,
        name: 'Red Velvet CakeSickle',
        price: 199,
        image: '../../assets/red-velvet-sickle.png',
        category: 'cake sickels',
      },
      {
        id: 10,
        name: 'Customized Chocolate box',
        price: 199,
        image: '../../assets/choco-box.png',
        category: 'chocolate hampers',
      },
      {
        id: 11,
        name: 'Customized Chocolate Msg',
        price: 199,
        image: '../../assets/choco-msg.png',
        category: 'chocolate hampers',
      },
      {
        id: 12,
        name: 'Rakshabandhan gift hamper',
        price: 199,
        image: '../../assets/raksha-offer.png',
        category: 'chocolate hampers',
      },
    ];
  }
}
