import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms'



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartItems = [];
checkout;


  constructor(
    private forms : FormBuilder,
    private service : CartService) {
   }

   emptyCart(){
     this.cartItems = this.service.emptyCart();
   }

  ngOnInit() {
this.cartItems = this.service.getItems();

this.checkout = this.forms.group({
  name : '',
  address : ''
});

  }


  onSubmit(customerData){
    console.warn('Your Order is Placed. Thank You!');
    this.emptyCart();
    this.checkout.reset();
  }

}