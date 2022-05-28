import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { GraphicService } from 'src/app/services/graphic.service';

@Component({
  selector: 'solar-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements OnInit {
  barChartData = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    datasets: [
      {
        label: 'Total de energia gerada por mês',
        data: [100, 400, 400, 100, 100, 200, 400, 400, 500, 900, 1100, 1200],
        fill: false,
        borderColor: '#2196F3',
        pointBorderColor: 'black',
        tension: 0.4,
      },
    ],
  };
  graphicData: any;
  months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  constructor(private graficService: GraphicService) {}

  ngOnInit() {
    this.constructDataGrafic();
  }

  constructDataGrafic() {
    this.months.forEach((item) => {
      this.graficService.getConsumptionPerMonth(item);
    });
    this.graphicData = this.graficService.returnGraphicData();
    console.log(this.graphicData);
  }
}
