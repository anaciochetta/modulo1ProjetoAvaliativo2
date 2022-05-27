import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'solar-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements OnInit {
  barChartData = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'My First Dataset',
        data: [100, 400, 400, 100, 100, 200, 400, 400, 500, 900, 1100, 1200],
        fill: false,
        borderColor: '#2196F3',
        pointBorderColor: 'black',
        tension: 0.4,
      },
    ],
  };
  constructor() {}

  ngOnInit() {}
}
