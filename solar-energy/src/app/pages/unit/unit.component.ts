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
  id: number = 0;
  formUnit = new Unit();
  title: string = '';

  constructor(
    private unitService: UnitService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //recebe a informação da rota se é de edição ou criação
    this.activatedroute.data.subscribe((data) => {
      this.routeData = data;
    });
    if (this.routeData.editing == true) {
      this.unitService.getUnitById((data: any) => {
        this.formUnit = data;
        this.title = 'Editar Unidade';
      });
    } else {
      this.title = 'Cadastrar Unidade';
    }
  }

  //click do botão que verifica se é para ir à página de editar ou criar unidade
  onSubmit() {
    if (this.routeData.editing == true) {
      this.editUnit();
    } else {
      this.createNewUnit();
    }
    this.unitService.goToUnitList();
  }

  //chama os serviços de criação de unidade
  createNewUnit() {
    this.formUnit.id = Math.round(Math.random() * 100);
    this.unitService.pushUnitsList({ ...this.formUnit });
    this.unitService.addUnitList({ ...this.formUnit }).subscribe();
  }

  //chama os serviços de edição de unidade
  editUnit() {
    this.id = Number(localStorage.getItem('id'));
    this.formUnit.id = this.id;
    this.unitService.editUnit(this.id, { ...this.formUnit });
  }
}
