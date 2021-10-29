import { Component, OnInit, AfterViewInit,ElementRef,ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements AfterViewInit {

  
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  doughnutChart: any;

  constructor() { }

  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined. 
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Completado', 'Faltante'],
        datasets: [{
          label: 'Avance',
          data: [75, 25],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  
  
}
