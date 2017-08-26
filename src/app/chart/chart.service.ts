
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Trade} from '../Model/trade.nodel';

@Injectable()
export class ChartService {
  constructor(private http: Http) {}
  futureChanged = new Subject<any>();

  getHistoryData(data: any) {
    return this.http.post('http://localhost:8080/getHisoryTsecWeightedData', data).subscribe(
      res => {
        const response = res.json();
        console.log(response);
        this.futureChanged.next(response);
      }
     );
  }

  setTradeData(data: Trade) {
    return this.http.post('http://localhost:8080/setTradeData', data).subscribe(
      res => {
        const response = res.json();
      }
    );
  }
}
