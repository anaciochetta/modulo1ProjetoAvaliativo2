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
    this.http.delete('http://localhost:3000/units/' + id).subscribe();
  }

  goToEditing(id: number) {
    localStorage.setItem('id', JSON.stringify(id));
    this.route.navigateByUrl('/edit-unit');
  }

  getUnitById(cb: any): any {
    let id = Number(localStorage.getItem('id'));
    this.getUnitList().subscribe((resultado) => {
      this.units = resultado;
      this.filterUnitById(id);
      return cb(this.unitToEdit[0]);
    });
  }

  filterUnitById(id: number) {
    this.unitToEdit = this.units.filter((unit) => {
      return unit.id == id;
    });
  }

  editUnit(id: number, unit: any) {
    this.http
      .put('http://localhost:3000/units/' + id, unit)
      .subscribe((data) => {
        console.log(data);
        console.log(this.unitList);
      });
  }
}
