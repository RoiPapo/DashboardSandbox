import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-clear-web',
  templateUrl: './clear-web.component.html',
  styleUrls: ['./clear-web.component.css']
})
export class ClearWebComponent implements OnInit {

  @Input()

  ClearWebData: {};
  imgDir: string = "../assets/img/";
  constructor() {
    
   }

  ngOnInit() {

  }

}
