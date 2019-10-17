import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nngx-charts',
  templateUrl: './nngx-charts.component.html',
  styleUrls: ['./nngx-charts.component.css']
})
export class NngxChartsComponent implements OnInit {

  constructor() { }

  data : {name:string, value:number}[]=[
    {
    name:"Ajay",
    value:2500
    },
    {
      name:"Jeffrin",
      value:2000
    },
    {
      name:"Pranav",
      value:2080
    }
  ]
  view: any[] = [500, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['red', '#A10A28', '#C7B42C', '#AAAAAA']
  };  
  ngOnInit() {
  }
  onSelect(event)
  {
console.log(event)
  }
}
