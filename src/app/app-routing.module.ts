import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LogManagerComponent} from './log-manager/log-manager.component';
import {DataManagerComponent} from './data-manager/data-manager.component';
import {ChartComponent} from './chart/chart.component';
import {AnalysisComponent} from './analysis/analysis.component';

const appRoutes: Routes = [
  { path: 'log-manager', component: LogManagerComponent },
  { path: 'data-manager', component: DataManagerComponent},
  { path: 'chart', component: ChartComponent },
  { path: 'analysis', component: AnalysisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
