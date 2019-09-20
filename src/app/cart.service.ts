import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn : 'root'
})
export class CartService {
items = [];

  constructor(
    private http : HttpClient
  ) { }

addToCart(product){
  this.items.push(product);
}

getItems(){
  return this.items;
}

emptyCart(){
  this.items = [];
  return this.items;
}

getShippingPrices(){
  return this.http.get('/assets/shipping.json');
}

getData(){
  return this.http.get("https://www.googleapis.com/blogger/v3/blogs/1207806558163186871?key=AIzaSyD8oO2Jpe2kIopyhniJCVBKSNQHXWNbaWE");
}


}