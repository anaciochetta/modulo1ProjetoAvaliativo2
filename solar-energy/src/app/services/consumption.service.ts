import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnitConsumption } from '../utils/model/consumption.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumptionService {
  consumptionList: UnitConsumption[] = [];

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
}
