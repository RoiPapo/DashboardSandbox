import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-clear-web',
  templateUrl: './clear-web.component.html',
  styleUrls: ['./clear-web.component.css']
})
export class ClearWebComponent implements AfterViewInit {

 @Input() data:{};
  constructor() { }

  ngAfterViewInit() {
    console.log(this.data);
  }

}
