import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Unit } from '../utils/unit.class';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  unitList: Unit[] = [];
  units: Unit[] = [];
  unitToEdit: Unit[] = [];
  unitId: number = 0;

  constructor(private http: HttpClient, private route: Router) {}

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

  removeUnit(id: number) {
    this.http.delete('http://localhost:3000/units/' + id).subscribe((data) => {
      console.log(data);
    });
  }

  goToEditing(id: number) {
    this.route.navigateByUrl('/edit-unit');
    localStorage.setItem('id', JSON.stringify(id));
  }

  getUnitById(): any {
    let id = Number(localStorage.getItem('id'));
    this.getUnitList().subscribe((resultado) => {
      this.units = resultado;
      this.filterUnitById(id);
      return this.unitToEdit;
    });
  }

  filterUnitById(id: number) {
    this.unitToEdit = this.units.filter((unit) => {
      return unit.id == id;
    });
    console.log(this.unitToEdit);
  }

  editUnit(id: number, unit: any) {
    const body = JSON.stringify(unit);
    this.http
      .post('http://localhost:3000/units/' + id, body)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
