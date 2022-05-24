import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consumption } from '../utils/consumption.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumptionService {
  consumptionList: Consumption[] = [];

  constructor(private http: HttpClient) {}

  pushConsumptionList(consumption: any): any {
    this.consumptionList.push(consumption);
    console.log(this.consumptionList);
  }

  addConsumption(consumption: Consumption): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(consumption);
    return this.http.post('http://localhost:3000/consumption', body, {
      headers: headers,
    });
  }
}
