import { Component, OnInit } from '@angular/core';

import {tabs} from '../tabs';

import {Router} from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
tabs = tabs;
  constructor(
    private route : Router
  ) { }

  ngOnInit() {
  }

  navigate(tab){
    this.route.navigate(['/'+tab.text.toString().toLowerCase()]);
  }

}