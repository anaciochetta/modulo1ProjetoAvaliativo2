import { Component, EventEmitter, OnInit } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { UnitService } from 'src/app/services/unit.service';
import { MONTH_MOCK, YEAR_MOCK } from 'src/app/utils/date-mock';
import { UnitConsumption } from 'src/app/utils/model/consumption.model';
import { consumptionData } from 'src/app/utils/model/year-consumption.model';
import { Unit } from 'src/app/utils/unit.class';

@Component({
  selector: 'solar-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  unitsList: Unit[] = [];
  activeUnitsList: Unit[] = [];
  inactiveUnitsList: Unit[] = [];
  activeUnits: number = 0;
  inactiveUnits: number = 0;
  totalUnits: number = 0;
  consumptionList: UnitConsumption[] = [];
  meanEnergy: number = 0;
  years = YEAR_MOCK;
  months = MONTH_MOCK;
  selectedYear: any;
  energyPerMonth: number = 0;

  selectYear = new EventEmitter<string>();

  constructor(
    private unitService: UnitService,
    private consumptionService: ConsumptionService
  ) {}

  ngOnInit(): void {
    this.getUnitsList();
    this.getConsumptionList();
  }

  //chama o serviço para pegar a lista das unidades
  getUnitsList(): void {
    this.unitService.getUnitList().subscribe((data) => {
      this.unitsList = data;
      this.filterActiveUnits();
      this.filterInactiveUnits();
      this.renderPage();
    });
  }

  //filtra as unidades ativas para renderizar a tela
  filterActiveUnits() {
    this.activeUnitsList = this.unitsList.filter((active) => {
      return active.isActive == true;
    });
  }
  //filtra as unidades ativas para renderizar a tela
  filterInactiveUnits() {
    this.inactiveUnitsList = this.unitsList.filter((inactive) => {
      return inactive.isActive == false;
    });
  }

  //chama o serviço para pegar a lista das unidades consumidoras
  getConsumptionList() {
    this.consumptionService.getConsumptionList().subscribe((data) => {
      this.consumptionList = data;
    });
  }

  //faz a média de energia com o total de unidades
  meanEnergyConsumption() {
    this.consumptionService.totalEnergyConsumption((data: any) => {
      let toltalEnergy = data;
      this.meanEnergy = Math.round(toltalEnergy / this.totalUnits);
    });
  }

  //renderiza a página
  renderPage() {
    this.activeUnits = this.activeUnitsList.length;
    this.inactiveUnits = this.inactiveUnitsList.length;
    this.totalUnits = this.unitsList.length;
    this.meanEnergyConsumption();
  }

  //renderiza a tabela de consumo anual conforme o select de ano
  consumptionTable() {
    this.months.forEach((month) => {
      this.consumptionService.getConsumptionPerMonth(
        this.selectedYear,
        month.value,
        (data: any) => {
          month.energy = data;
        }
      );
    });
  }
}
