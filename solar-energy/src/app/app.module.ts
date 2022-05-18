import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UnitsComponent } from './pages/units/units.component';
import { CreateUnitComponent } from './pages/create-unit/create-unit.component';
import { ConsumptionComponent } from './pages/consumption/consumption.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LogonComponent } from './pages/logon/logon.component';

const ROUTES: Route[] = [
  {
    path: '', //sem nada pois entra na página principal, sem o / alguma coisa
    component: DashboardComponent,
  },
  {
    path: 'units',
    component: UnitsComponent,
  },
  {
    path: 'create-unit',
    component: CreateUnitComponent,
  },
  {
    path: 'consumption',
    component: ConsumptionComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideBarComponent,
    DashboardComponent,
    UnitsComponent,
    CreateUnitComponent,
    ConsumptionComponent,
    LogonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
