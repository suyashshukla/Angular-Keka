import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

@Input() data;
@Output() navigate = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}