import { Component, OnInit } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { UnitService } from 'src/app/services/unit.service';
import {
  Consumption,
  UnitConsumption,
} from 'src/app/utils/model/consumption.model';
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

  //chama o serviço para pegar a lista das unidades para renderizar a tela
  getUnitsList(): void {
    this.unitService.getUnitList().subscribe((data) => {
      this.unitsList = data;
    });
  }

  onSubmit() {
    this.createUnitConsumption();
  }

  //chama serviços para a criação de uma nova unidade consumidora
  createUnitConsumption() {
    this.unitConsumptionById.consumption.push(this.unitConsumption);
    this.consumptionService.pushConsumptionList({
      ...this.unitConsumptionById,
    });
    this.consumptionService
      .addConsumption({ ...this.unitConsumptionById })
      .subscribe();
  }
}
