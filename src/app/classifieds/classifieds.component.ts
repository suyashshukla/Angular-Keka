import { Component, OnInit } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import {CartService} from '../cart.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-classifieds',
  templateUrl: './classifieds.component.html',
  styleUrls: ['./classifieds.component.css']
})
export class ClassifiedsComponent implements OnInit {

data;

  constructor(private http : HttpClient,
  private service : CartService,
  private route : Router
  ) { }



  ngOnInit() {
  }

}