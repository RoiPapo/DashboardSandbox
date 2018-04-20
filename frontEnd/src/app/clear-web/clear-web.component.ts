import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Color } from 'ng2-charts';
import { Pipe } from '@angular/core';

@Pipe({ name: 'round' })
export class RoundPipe {
    transform(input: number) {
        return Math.round(input);
    }
}

@Component({
  selector: 'app-clear-web',
  templateUrl: './clear-web.component.html',
  styleUrls: ['./clear-web.component.css']
})
export class ClearWebComponent {

  @Input()

  ClearWebData: {};

  imgDir: string = "../assets/img/";

  // Doughnut
  public doughnutChartLabels: string[] = ['High', 'Medium', 'low'];
  public doughnutChartType: string = 'doughnut';
  public colors: any[] = [{ borderWidth: 0, backgroundColor: ["#41b0d5", "#f3ab10", "#d54141", "#a4add3"] }];
  public doughnutChartOptions: any = {
    borderWidth: 0,
    cutoutPercentage: 88,
    legend: {
      display: false
    }
  }
  // events
  public chartClicked(e: any): void {

  }

  public chartHovered(e: any): void {

  }

  getStyle() {
    // snip snip -> fetch the url from somewhere
    const style = `width:30%`;
    return style;
  }

  constructor() {
  }


}
