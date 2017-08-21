import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogManagerComponent } from './log-manager/log-manager.component';
import { HeaderComponent } from './header/header.component';
import { DataManagerComponent } from './data-manager/data-manager.component';
import { ChartComponent } from './chart/chart.component';
import { AnalysisComponent } from './analysis/analysis.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
