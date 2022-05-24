import { Component, OnInit } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { UnitService } from 'src/app/services/unit.service';
import { Consumption } from 'src/app/utils/consumption.model';
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
  consumptionList: Consumption[] = [];
  meanEnergy: number = 0;

  constructor(
    private unitService: UnitService,
    private consumptionService: ConsumptionService
  ) {}

  ngOnInit(): void {
    this.getUnitsList();
    this.getConsumptionList();
  }

  getUnitsList(): void {
    this.unitService.getUnitList().subscribe((data) => {
      this.unitsList = data;
      this.filterActiveUnits();
      this.filterInactiveUnits();
      this.renderPage();
    });
  }

  filterActiveUnits() {
    this.activeUnitsList = this.unitsList.filter((active) => {
      return active.isActive == true;
    });
  }
  filterInactiveUnits() {
    this.inactiveUnitsList = this.unitsList.filter((inactive) => {
      return inactive.isActive == false;
    });
  }

  getConsumptionList() {
    this.consumptionService.getConsumptionList().subscribe((data) => {
      this.consumptionList = data;
    });
  }

  meanEnergyConsumption() {
    this.consumptionService.totalEnergyConsumption((data: any) => {
      let toltalEnergy = data;
      this.meanEnergy = toltalEnergy / this.totalUnits;
    });
  }

  renderPage() {
    this.activeUnits = this.activeUnitsList.length;
    this.inactiveUnits = this.inactiveUnitsList.length;
    this.totalUnits = this.unitsList.length;
    this.meanEnergyConsumption();
  }
}
