import { Injectable } from '@angular/core';
import { UnitConsumption } from '../utils/model/consumption.model';
import { graphicData } from '../utils/model/graphic.model';
import { ConsumptionService } from './consumption.service';

@Injectable({
  providedIn: 'root',
})
export class GraphicService {
  consumptionList: UnitConsumption[] = [];
  consumptionPerMonth: any;
  consumptionPerYear: any;

  constructor(private consumptionService: ConsumptionService) {}

  getConsumptionPerMonth(month: string) {
    this.consumptionService.getConsumptionList().subscribe((data) => {
      this.consumptionList = data;
      const totalEnergy = this.getTotalEnergyMonth(month);
      this.implementGraphicData(month, totalEnergy);
    });
  }

  getTotalEnergyMonth(selectedMonth: string) {
    this.consumptionPerYear = this.consumptionList.filter((item) => {
      return item.year == 2021;
    });
    this.consumptionPerMonth = this.consumptionPerYear.filter(
      (item: { month: string }) => {
        return item.month == selectedMonth;
      }
    );
    let totalEnergy = 0;
    this.consumptionPerMonth.forEach((item: any) => {
      totalEnergy += item.energy;
    });
    return totalEnergy;
  }

  implementGraphicData(month: string, energy: number) {
    switch (month) {
      case 'january':
        graphicData.january = energy;
        break;
      case 'february':
        graphicData.february = energy;
        break;
      case 'march':
        graphicData.march = energy;
        break;
      case 'april':
        graphicData.april = energy;
        break;
      case 'may':
        graphicData.may = energy;
        break;
      case 'june':
        graphicData.june = energy;
        break;
      case 'july':
        graphicData.july = energy;
        break;
      case 'august':
        graphicData.august = energy;
        break;
      case 'september':
        graphicData.september = energy;
        break;
      case 'october':
        graphicData.october = energy;
        break;
      case 'november':
        graphicData.november = energy;
        break;
      case 'november':
        graphicData.november = energy;
        break;
    }
  }

  returnGraphicData() {
    return graphicData;
  }
}
