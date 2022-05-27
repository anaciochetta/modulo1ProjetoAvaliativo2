import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/services/unit.service';
import { Unit } from 'src/app/utils/unit.class';

@Component({
  selector: 'solar-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.scss'],
})
export class UnitsListComponent implements OnInit {
  unitsList: Unit[] = [];
  activeUnits: Unit[] = [];

  constructor(private unitService: UnitService) {}

  ngOnInit(): void {
    this.getUnitsList();
  }

  //chama o serviço de buscar a lista de unidades
  getUnitsList(): void {
    this.unitService.getUnitList().subscribe((resultado) => {
      this.unitsList = resultado;
      this.filterActiveUnits();
    });
  }

  //filtra as unidades ativas para renderizar a tela
  filterActiveUnits() {
    this.activeUnits = this.unitsList.filter((active) => {
      return active.isActive == true;
    });
  }

  //chama o serviço de editar a lista de unidades
  editUnit(id: number) {
    this.unitService.goToEditing(id);
  }

  //chama o serviço de remover a lista de unidades
  removeUnit(id: number) {
    this.unitService.removeUnit(id);
    this.getUnitsList();
  }
}
