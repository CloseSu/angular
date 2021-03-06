import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
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
import { LogService } from './log-manager/log.service';
import {DataService} from './data-manager/data.service';
import {ChartService} from './chart/chart.service';
import {TradeService} from './analysis/trade.service';

export function highchartsFactory() {
  const Highcharts = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(Highcharts);
  return Highcharts;
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
    JsonpModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService, LogService, DataService, ChartService, TradeService, {
    provide: HighchartsStatic,
    useFactory: highchartsFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
