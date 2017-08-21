import { Component, OnInit } from '@angular/core';
import {Jsonp} from '@angular/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  options;

  data = [
    [1282521600000, 35.97, 36, 35.04, 35.11],
    [1282608000000, 34.67, 34.71, 34.09, 34.28],
    [1282694400000, 34.01, 34.86, 33.89, 34.7],
    [1282780800000, 35.06, 35.11, 34.33, 34.33],
    [1282867200000, 34.54, 34.66, 33.65, 34.52]
  ];

  constructor(jsonp: Jsonp) {
      this.options = {
        title : { text : '期貨歷史線圖' },
        chart: {
          width: 1100,
          height: 350
        },
        rangeSelector : {
          selected : 1,
          buttons: [{
            type: 'day',
            count: 1,
            text: '1d'
          }, {
            type: 'day',
            count: 7,
            text: '7d'
          }, {
            type: 'month',
            count: 1,
            text: '1m'
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
          data : this.data,
          tooltip: {
            valueDecimals: 2
          }
        }, {
          name: 'avg20',
          type: 'spline',
          data: [
            [1282521600000, 33],
            [1282608000000, 32],
            [1282694400000, 31],
            [1282780800000, 35],
            [1282867200000, 36]
          ],
          tooltip: {
            valueDecimals: 2
          }
        }, {
          name: 'avg60',
          type: 'spline',
          data: [
            [1282521600000, 35.97],
            [1282608000000, 34.67],
            [1282694400000, 34.01],
            [1282780800000, 35.06],
            [1282867200000, 34.54]
          ],
          tooltip: {
            valueDecimals: 2
          }
        }]
      };
  }

  ngOnInit() {
  }

  onSubmit() {

  }
}
