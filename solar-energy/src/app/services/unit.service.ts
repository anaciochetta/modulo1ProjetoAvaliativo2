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

  //armazena unidade num array
  pushUnitsList(unit: any): any {
    this.unitList.push(unit);
  }

  //adciona nova unidade por meio do POST
  addUnitList(unit: Unit): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(unit);
    return this.http.post('http://localhost:3000/units', body, {
      headers: headers,
    });
  }

  //pega a lista de unidades por meio do GET
  getUnitList(): Observable<Unit[]> {
    return this.http.get<Unit[]>('http://localhost:3000/units');
  }

  //remove unidade por meio do DELETE
  removeUnit(id: number) {
    this.http.delete('http://localhost:3000/units/' + id).subscribe();
  }

  //passa o id da unidade a ser editada para o localstorage e faz a rota para a página de edição
  goToEditing(id: number) {
    localStorage.setItem('id', JSON.stringify(id));
    this.route.navigateByUrl('/edit-unit');
  }

  //pega a lista de unidades, faz um filtro pelo id e retorna a unidadade para ser editada
  getUnitById(cb: any): any {
    let id = Number(localStorage.getItem('id'));
    this.getUnitList().subscribe((resultado) => {
      this.units = resultado;
      this.filterUnitById(id);
      return cb(this.unitToEdit[0]);
    });
  }

  //filtra a unidade pelo id dentro de uma lista e armazena no unitToEdit
  filterUnitById(id: number) {
    this.unitToEdit = this.units.filter((unit) => {
      return unit.id == id;
    });
  }

  //edita a unidade por meio do PUT
  editUnit(id: number, unit: any) {
    this.http.put('http://localhost:3000/units/' + id, unit).subscribe();
  }

  //faz a rota para ir a página com a lista das unidades ativas
  goToUnitList() {
    this.route.navigateByUrl('/units-list');
  }
}
