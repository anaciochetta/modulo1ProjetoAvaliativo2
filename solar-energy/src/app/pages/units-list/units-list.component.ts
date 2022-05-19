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

  remove(id: number) {
    this.unitService.removeUnit(id);
    this.getUnitsList();
  }
}
