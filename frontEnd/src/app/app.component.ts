import { Component, OnInit } from '@angular/core';
import { RequestService } from './requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: {};

  constructor(private requestService: RequestService) {
  }


  ngOnInit() {
    this.loadData();
    console.log(this.data);
  }

  loadData() {
    this.requestService.getData()
      .subscribe(
        data => {
          this.data = data;
          console.log(this.data)
        },

        err => {
          console.log(err)
        }
      )
  }

}
