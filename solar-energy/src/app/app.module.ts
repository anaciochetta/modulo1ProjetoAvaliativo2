import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConsumptionComponent } from './pages/consumption/consumption.component';
import { HttpClientModule } from '@angular/common/http';
import { LogonComponent } from './pages/logon/logon.component';
import { FormsModule } from '@angular/forms';
import { UnitsListComponent } from './pages/units-list/units-list.component';
import { UnitComponent } from './pages/unit/unit.component';
import { AuthenticationService } from './services/authentication.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { GraphicsComponent } from './pages/dashboard/graphics/graphics.component';
import { NgChartsModule } from 'ng2-charts';

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
    GraphicsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
