import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dark-web',
  templateUrl: './dark-web.component.html',
  styleUrls: ['./dark-web.component.css']
})
export class DarkWebComponent implements OnInit {

  @Input()

  DarkWebData: {};
  imgDir: string = "../assets/img/";
  constructor() { }

  ngOnInit() {
  }

}
