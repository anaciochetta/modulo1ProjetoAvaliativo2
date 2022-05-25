import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConsumptionComponent } from './pages/consumption/consumption.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LogonComponent } from './pages/logon/logon.component';
import { FormsModule } from '@angular/forms';
import { UnitsListComponent } from './pages/units-list/units-list.component';
import { UnitComponent } from './pages/unit/unit.component';
import { AuthenticationService } from './services/authentication.service';
import { AppRoutingModule } from './app-routing.module';

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
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
