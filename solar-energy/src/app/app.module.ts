import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConsumptionComponent } from './pages/consumption/consumption.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LogonComponent } from './pages/logon/logon.component';
import { FormsModule } from '@angular/forms';
import { UnitsListComponent } from './pages/units-list/units-list.component';
import { UnitComponent } from './pages/unit/unit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';

const ROUTES: Route[] = [
  {
    path: '', //sem nada pois entra na página principal, sem o / alguma coisa
    component: DashboardComponent,
  },
  {
    path: 'logon',
    component: LogonComponent,
  },
  {
    path: 'units-list',
    component: UnitsListComponent,
  },
  {
    path: 'create-unit',
    component: UnitComponent,
    data: {
      editing: false,
    },
  },
  {
    path: 'edit-unit',
    component: UnitComponent,
    data: {
      editing: true,
    },
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
    ConsumptionComponent,
    LogonComponent,
    UnitsListComponent,
    UnitComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
