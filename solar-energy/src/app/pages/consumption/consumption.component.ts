import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/services/unit.service';
import { Unit } from 'src/app/utils/unit.class';

@Component({
  selector: 'solar-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss'],
})
export class ConsumptionComponent implements OnInit {
  unitsList: Unit[] = [];

  constructor(private unitService: UnitService) {}

  ngOnInit(): void {
    this.getUnitsList();
  }

  getUnitsList(): void {
    this.unitService.getUnitList().subscribe((resultado) => {
      this.unitsList = resultado;
    });
  }

  onSubmit() {}
}
