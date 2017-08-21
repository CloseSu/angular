import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogManagerComponent } from './log-manager/log-manager.component';
import { HeaderComponent } from './header/header.component';
import { DataManagerComponent } from './data-manager/data-manager.component';
import { ChartComponent } from './chart/chart.component';
import { AnalysisComponent } from './analysis/analysis.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule, JsonpModule} from '@angular/http';
import {AuthGuard} from './log-manager/auth-guard.service';
import {AuthService} from './log-manager/auth.service';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    LogManagerComponent,
    HeaderComponent,
    DataManagerComponent,
    ChartComponent,
    AnalysisComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    JsonpModule
  ],
  providers: [AuthGuard, AuthService, {
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
