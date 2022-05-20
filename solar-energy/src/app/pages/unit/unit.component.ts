import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnitService } from 'src/app/services/unit.service';
import { Unit } from 'src/app/utils/unit.class';

@Component({
  selector: 'solar-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
})
export class UnitComponent implements OnInit {
  routeData: any;
  newUnit = new Unit();
  id: number = 0;
  unitData: any;

  constructor(
    private unitService: UnitService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedroute.data.subscribe((data) => {
      this.routeData = data;
    });
    this.unitData = this.unitService.unitToEdit;
    console.log(this.unitData);
  }

  onSubmit() {
    if (this.routeData.editing == true) {
    }
    this.createNewUnit();
  }

  createNewUnit() {
    this.newUnit.id = Math.round(Math.random() * 100);
    this.unitService.pushUnitsList({ ...this.newUnit });
    this.unitService.addUnitList({ ...this.newUnit }).subscribe((data) => {
      data;
    });
  }

  getUnitToEdit() {
    this.id = Number(localStorage.getItem('id'));
    console.log(this.id);
    let a = this.unitService.getUnitById();
    console.log(a);
  }

  editUnit() {}
}
