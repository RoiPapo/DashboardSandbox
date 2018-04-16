import { Component, OnInit } from '@angular/core';
import { RequestService } from './requests.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ClearWebData: {};
  DarkWebData: {};


  constructor(private requestService: RequestService) {
  }


  ngOnInit() {
    this.loadData();

  }

  loadData() {
    this.requestService.getData()
      .subscribe(
        data => {
          this.ParseJson(data)
        },

        err => {
          console.log(err)
        }
      )
  }

  ParseJson(data) {
    this.ClearWebData = data["ClearWeb"];
    this.DarkWebData = data["DarkWeb"];
  }

}
