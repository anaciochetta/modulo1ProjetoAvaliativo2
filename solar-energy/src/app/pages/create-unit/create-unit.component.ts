import { Component, OnInit } from '@angular/core';
import { UnitService } from 'src/app/services/unit.service';
import { Unit } from 'src/app/utils/unit';

@Component({
  selector: 'solar-create-unit',
  templateUrl: './create-unit.component.html',
  styleUrls: ['./create-unit.component.scss'],
})
export class CreateUnitComponent implements OnInit {
  newUnit = new Unit();

  constructor(private unitService: UnitService) {}

  ngOnInit(): void {}

  createNewUnit() {
    this.newUnit.id = Math.round(Math.random() * 100);
    if (this.newUnit.isActive == null) {
      this.newUnit.isActive = false;
    }
    this.unitService.pushUnitsList({ ...this.newUnit });
    const isso = this.unitService
      .postUnitList({ ...this.newUnit })
      .subscribe((data) => {
        data;
      });
  }
}
