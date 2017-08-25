
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Future} from '../Model/future.model';

@Injectable()
export class DataService {
  constructor(private http: Http) {}
  futureChanged = new Subject<Future[]>();

  getTodayData() {
    return this.http.get('http://localhost:8080/getTodayData').subscribe(
      res => {
        const data = res.json();
        console.log(data);
        this.futureChanged.next(data);
      }
    );
  }
}
