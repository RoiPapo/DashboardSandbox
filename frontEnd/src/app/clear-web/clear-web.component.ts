import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-clear-web',
  templateUrl: './clear-web.component.html',
  styleUrls: ['./clear-web.component.css']
})
export class ClearWebComponent implements OnChanges {

  @Input()

  ClearWebData: {};

  imgDir: string = "../assets/img/";

  // Doughnut
  public chartDatasets: Array<any> = [
    {
      borderWidth: [0, 0, 0], data: [10, 20, 30],
      backgroundColor: [
        "#41b0d5",
        "#f3ab10",
        "#d54141"
      ],
    }
  ];
  public doughnutChartLabels: string[] = ['High', 'Medium', 'low'];
  public doughnutChartType: string = 'doughnut';
  public colors: Array<Color> = [{}];
  public doughnutChartOptions: any = {
    cutoutPercentage: 85,
    legend: {
      position: 'bottom',
      labels: {
        fontColor: '#ffffff'
      }


    }
  }
  // events
  public chartClicked(e: any): void {

  }

  public chartHovered(e: any): void {

  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['ClearWebData']) {
      console.log(this.ClearWebData);
    }
  }

}
