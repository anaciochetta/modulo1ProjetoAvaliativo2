import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { GraphicService } from 'src/app/services/graphic.service';
import { graphicData } from 'src/app/utils/model/graphic.model';

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
        data: [10, 10, 10],
        fill: false,
        borderColor: '#2196F3',
        pointBorderColor: 'black',
        tension: 0.4,
      },
    ],
  };
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
  data: any = {
    label: 'Total de energia gerada por mês',
    data: [
      graphicData.january,
      graphicData.february,
      graphicData.march,
      graphicData.april,
      graphicData.may,
      graphicData.june,
      graphicData.july,
      graphicData.august,
      graphicData.september,
      graphicData.october,
      graphicData.november,
      graphicData.december,
    ],
    fill: false,
    borderColor: '#fff',
    pointBorderColor: 'black',
    tension: 0.4,
  };

  constructor(private graficService: GraphicService) {}

  ngOnInit() {
    this.constructDataGrafic();
  }

  constructDataGrafic() {
    this.months.forEach((item) => {
      this.graficService.getConsumptionPerMonth(item);
    });
    this.data = this.graficService.returnGraphicData();
    console.log(graphicData);
    //this.removeData(this.barChartData);
  }
}
