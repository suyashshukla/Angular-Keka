import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {CartService} from '../cart.service'

import { products } from '../products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product;

  constructor(
   private route : ActivatedRoute,
   private service : CartService) { }

  addToCart(product){
    window.alert('Item added to Cart!');
    this.service.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>
    this.product = products[params.get('productId')]
    ); 
  }

}