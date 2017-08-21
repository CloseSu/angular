import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LogManagerComponent} from './log-manager/log-manager.component';
import {DataManagerComponent} from './data-manager/data-manager.component';
import {ChartComponent} from './chart/chart.component';
import {AnalysisComponent} from './analysis/analysis.component';
import {AuthGuard} from './log-manager/auth-guard.service';

const appRoutes: Routes = [
  { path: 'log-manager', component: LogManagerComponent },
  { path: 'data-manager', component: DataManagerComponent, canActivate: [AuthGuard]},
  { path: 'chart', component: ChartComponent, canActivate: [AuthGuard] },
  { path: 'analysis', component: AnalysisComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
