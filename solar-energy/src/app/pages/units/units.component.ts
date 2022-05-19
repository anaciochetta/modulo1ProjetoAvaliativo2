import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/services/unit.service';
import { Unit } from 'src/app/utils/unit';

@Component({
  selector: 'solar-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],
})
export class UnitsComponent implements OnInit {
  unitsList: Unit[] = [];
  activeUnits: Unit[] = [];

  constructor(private unitService: UnitService) {}

  ngOnInit(): void {
    this.getUnitsList();
  }

  getUnitsList(): void {
    this.unitService.getUnitList().subscribe((resultado) => {
      this.unitsList = resultado;
      this.filterActiveUnits();
    });
    console.log(this.unitsList);
  }

  filterActiveUnits() {
    this.activeUnits = this.unitsList.filter((active) => {
      return active.isActive == true;
    });
  }

  removeUnit(id: number) {
    const unitIndex = this.activeUnits.findIndex((unit) => unit.id === id); //busca o id do item
    this.activeUnits.splice(unitIndex, 1);
  } //exclui o item
}
