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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitsListComponent } from './pages/units-list/units-list.component';
import { UnitComponent } from './pages/unit/unit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

const ROUTES: Route[] = [
  {
    path: '', //sem nada pois entra na página principal, sem o / alguma coisa
    component: LogonComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
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
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
