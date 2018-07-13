import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {ChartService} from './chart.service';
import {LogService} from '../log-manager/log.service';
import {User} from '../Model/user.model';
import {Trade} from '../Model/trade.nodel';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  options: any;
  subscription: Subscription;
  user: User;

  constructor(private chartService: ChartService,
            private logService: LogService) {}

  ngOnInit() {
    this.user = this.logService.user;
    this.subscription = this.chartService.futureChanged.subscribe(
      (data: any) => {
        this.options = {
          title : { text : '大盤歷史線圖' },
          chart: {
            width: 1100,
            height: 500
          },
          yAxis: [{
            min: data.min,
            max: data.max,
            height: '100%'
          }], xAxis: {
              tickInterval: 0
          },
          rangeSelector : {
            selected : 1,
            buttons: [ {
              type: 'month',
              count: 1,
              text: '1m'
            }, {
              type: 'month',
              count: 3,
              text: '3m'
            }, {
              type: 'month',
              count: 6,
              text: '6m'
            }, {
              type: 'year',
              count: 1,
              text: '1y'
            }, {
              type: 'all',
              text: 'All'
            }]
          },
          series : [{
            type : 'candlestick',
            name : 'CandleSticks',
            data : data.mainList,
            tooltip: {
              valueDecimals: 1
            }
          }, {
            name: 'avg20',
            type: 'spline',
            data: data.avg20List,
            tooltip: {
              valueDecimals: 1
            }
          }, {
            name: 'avg60',
            type: 'spline',
            data: data.avg60List,
            tooltip: {
              valueDecimals: 1
            }
          }, {
            name: 'avg120',
            type: 'spline',
            data: data.avg120List,
            tooltip: {
              valueDecimals: 1
            }
          }]
        };
      }
    );
  }

  getHistoryData(form: NgForm) {
    const value = form.value;
    const condition = {'dateStart': value.dateStart, 'dateEnd': value.dateEnd };
    this.chartService.getHistoryData(condition);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
