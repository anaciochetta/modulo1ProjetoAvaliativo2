import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ConsumptionComponent } from './pages/consumption/consumption.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogonComponent } from './pages/logon/logon.component';
import { UnitComponent } from './pages/unit/unit.component';
import { UnitsListComponent } from './pages/units-list/units-list.component';

const ROUTES: Route[] = [
  {
    path: '', //sem nada pois entra na página principal, sem o / alguma coisa
    component: DashboardComponent,
    //canActivate: [AuthenticationService],
  },
  {
    path: 'logon',
    component: LogonComponent,
  },
  {
    path: 'units-list',
    component: UnitsListComponent,
    //canActivate: [AuthenticationService],
  },
  {
    path: 'create-unit',
    component: UnitComponent,
    data: {
      editing: false,
    },
    //canActivate: [AuthenticationService],
  },
  {
    path: 'edit-unit',
    component: UnitComponent,
    data: {
      editing: true,
    },
    //anActivate: [AuthenticationService],
  },
  {
    path: 'consumption',
    component: ConsumptionComponent,
    //canActivate: [AuthenticationService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
