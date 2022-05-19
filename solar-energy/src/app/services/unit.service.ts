import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from '../utils/unit.class';

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

  addUnitList(unit: Unit): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(unit);
    return this.http.post('http://localhost:3000/units', body, {
      headers: headers,
    });
  }

  getUnitList(): Observable<Unit[]> {
    return this.http.get<Unit[]>('http://localhost:3000/units');
  }

  getUnitById(id: number) {
    return this.http.get('http://localhost:3000/units/' + id);
  }

  removeUnit(id: number) {
    this.http.delete('http://localhost:3000/units/' + id).subscribe((data) => {
      console.log(data);
    });
  } //exclui o item

  editUnitList(id: number, unit: any) {
    const body = JSON.stringify(unit);
    this.http
      .post('http://localhost:3000/units/' + id, body)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
