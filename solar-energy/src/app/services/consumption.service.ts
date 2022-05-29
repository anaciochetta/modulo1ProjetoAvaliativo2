import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnitConsumption } from '../utils/model/consumption.model';
import { Observable } from 'rxjs';
import { consumptionData } from '../utils/model/year-consumption.model';
import { YEAR_MOCK, MONTH_MOCK } from '../utils/date-mock';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root',
})
export class ConsumptionService {
  consumptionList: UnitConsumption[] = [];
  consumptionPerMonth: any;
  consumptionPerYear: any;
  consumptionPerYearList: any = [];
  years = YEAR_MOCK;
  months = MONTH_MOCK;

  constructor(private http: HttpClient) {}

  //armazena unidade consumidora num array
  pushConsumptionList(consumption: any): any {
    this.consumptionList.push(consumption);
  }

  //adciona nova unidade consumidora por meio do POST
  addConsumption(consumption: UnitConsumption): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(consumption);
    return this.http.post('http://localhost:3000/consumption', body, {
      headers: headers,
    });
  }

  //pega a lista de unidades consumidoras por meio do GET
  getConsumptionList(): Observable<UnitConsumption[]> {
    return this.http.get<UnitConsumption[]>(
      'http://localhost:3000/consumption'
    );
  }

  //pega a lista de unidades consumidoras, pega e retorna o total de energia consumida
  totalEnergyConsumption(cb: any) {
    let totalEnergy = 0;
    this.getConsumptionList().subscribe((data) => {
      this.consumptionList = data;
      totalEnergy = this.getEnergyConsumption();
      return cb(totalEnergy);
    });
  }

  //faz um filtro dentro das unidades consumidoras para pegar os valores energéticos, soma e retorna o total
  getEnergyConsumption() {
    let totalEnergy = 0;
    this.consumptionList.forEach((unit) => {
      totalEnergy += unit.energy;
    });
    return totalEnergy;
  }

  getConsumptionPerMonth(year: number, month: string, cb?: any) {
    this.getConsumptionList().subscribe((data) => {
      this.consumptionList = data;
      let totalEnergy = this.getTotalEnergyMonth(month, year);
      return cb(totalEnergy);
    });
  }

  getTotalEnergyMonth(selectedMonth: string, selectdYear: number) {
    this.consumptionPerYear = this.consumptionList.filter((item) => {
      return item.year == selectdYear;
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
}
