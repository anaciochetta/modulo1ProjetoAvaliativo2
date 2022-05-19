import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitService } from 'src/app/services/unit.service';
import { Unit } from 'src/app/utils/unit.class';

@Component({
  selector: 'solar-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
})
export class UnitComponent implements OnInit {
  newUnit = new Unit();
  //unitData: Unit;
  routeData: any;

  constructor(private unitService: UnitService, private router: Router) {
    //console.log(this.router.getCurrentNavigation().extras.state.example);
  }

  ngOnInit(): void {
    this.routeData = history.state;
    //fazer aqui uma função verificar como está a situação de editar ou add
  }

  onSubmit() {
    /* if (isEditing) {
      this.editUnit(unitData.id);
    } */
    this.createNewUnit();
  }

  createNewUnit() {
    this.newUnit.id = Math.round(Math.random() * 100);
    if (this.newUnit.isActive == null) {
      this.newUnit.isActive = false;
    }
    this.unitService.pushUnitsList({ ...this.newUnit });
    this.unitService.addUnitList({ ...this.newUnit }).subscribe((data) => {
      data;
    });
  }

  editUnit(id: number) {
    //precisa receber o obj e o id
    let modifiedUnit;
    this.unitService.getUnitById(id).subscribe((data) => {
      modifiedUnit = data;
    });
    this.unitService.editUnitList(id, modifiedUnit);
  }
}
