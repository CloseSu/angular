
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Trade} from '../Model/trade.nodel';

@Injectable()
export class TradeService {
  constructor(private http: Http) {}
  tradeChanged = new Subject<Trade>();

  getTradeData(data: any) {
    return this.http.post('http://localhost:8080/getTradeList', data).subscribe(
      res => {
        const response = res.json();
        console.log(response);
        this.tradeChanged.next(response);
      }
    );
  }

  updateTradeList(data: any) {
    return this.http.post('http://localhost:8080/updateTradeList', data).subscribe(
      res => {}
    );
  }
}
