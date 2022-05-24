import { Component, OnInit } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { UnitService } from 'src/app/services/unit.service';
import { Consumption, UnitConsumption } from 'src/app/utils/consumption.model';
import { MONTH_MOCK, YEAR_MOCK } from 'src/app/utils/date-mock';
import { Unit } from 'src/app/utils/unit.class';

@Component({
  selector: 'solar-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss'],
})
export class ConsumptionComponent implements OnInit {
  unitsList: Unit[] = [];
  years = YEAR_MOCK;
  months = MONTH_MOCK;
  unitConsumption = new UnitConsumption();
  unitConsumptionById = new Consumption();

  constructor(
    private unitService: UnitService,
    private consumptionService: ConsumptionService
  ) {}

  ngOnInit(): void {
    this.getUnitsList();
  }

  getUnitsList(): void {
    this.unitService.getUnitList().subscribe((resultado) => {
      this.unitsList = resultado;
    });
  }

  onSubmit() {
    this.createUnitConsumption();
  }

  createUnitConsumption() {
    this.unitConsumptionById.consumption.push(this.unitConsumption);
    this.consumptionService.pushConsumptionList({
      ...this.unitConsumptionById,
    });
    this.consumptionService
      .addConsumption({ ...this.unitConsumptionById })
      .subscribe();
    console.log(this.unitConsumptionById);
  }
}
