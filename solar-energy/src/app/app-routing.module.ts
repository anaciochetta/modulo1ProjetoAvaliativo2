import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ConsumptionComponent } from './pages/consumption/consumption.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LogonComponent } from './pages/logon/logon.component';
import { UnitComponent } from './pages/unit/unit.component';
import { UnitsListComponent } from './pages/units-list/units-list.component';
import { AuthGuardService } from './services/auth-guard.service';

//módulo de rotas
const ROUTES: Route[] = [
  {
    path: '', //sem nada pois entra na página principal, sem o / alguma coisa
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'logon',
    component: LogonComponent,
  },
  {
    path: 'units-list',
    component: UnitsListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-unit',
    component: UnitComponent,
    data: {
      editing: false,
    },
    canActivate: [AuthGuardService],
  },
  {
    path: 'edit-unit',
    component: UnitComponent,
    data: {
      editing: true,
    },
    canActivate: [AuthGuardService],
  },
  {
    path: 'consumption',
    component: ConsumptionComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
