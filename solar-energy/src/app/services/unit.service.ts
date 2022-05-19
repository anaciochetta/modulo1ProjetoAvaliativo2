import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from '../utils/unit';
import { IUnit } from '../utils/unit.model';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  unitList: Unit[] = [];

  constructor(private http: HttpClient) {}

  pushUnitsList(unit: any): any {
    this.unitList.push(unit);
    console.log(this.unitList);
  }

  postUnitList(unit: Unit): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(unit);
    return this.http.post('http://localhost:3000/units', body, {
      headers: headers,
    });
  }

  getUnitList(): Observable<Unit[]> {
    return this.http.get<Unit[]>('http://localhost:3000/units');
  }
}
