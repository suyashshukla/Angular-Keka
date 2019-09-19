import { Component, OnInit } from '@angular/core';

import {TabsComponent} from '../tabs/tabs.component';


import {cards} from '../cards';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  cards = cards;

  constructor() { }

  ngOnInit() {
  }

}