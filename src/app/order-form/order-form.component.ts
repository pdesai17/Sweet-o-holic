import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  orderForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    kg: new FormControl('500'),
  });

  onOrder() {
    console.warn(this.orderForm.value);
  }
}
