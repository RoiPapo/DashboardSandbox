import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dark-web',
  templateUrl: './dark-web.component.html',
  styleUrls: ['./dark-web.component.css']
})
export class DarkWebComponent  {

  @Input()

  DarkWebData: {};
  imgDir: string = "../assets/img/";
 
  // Doughnut
 public doughnutChartLabels: string[] = ['High', 'Medium', 'low'];
 public doughnutChartType: string = 'doughnut';
 public colors: any[]= [{ borderWidth:0, backgroundColor: ["#41b0d5", "#f3ab10", "#d54141", "#a4add3"] } ];
 public doughnutChartOptions: any = {
   borderWidth:0,
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

 constructor() {
 }


}
