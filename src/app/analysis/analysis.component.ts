import { Component, OnInit } from '@angular/core';
import {Trade} from '../Model/trade.nodel';
import {TradeService} from './trade.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  tradeList: Trade[];
  subscription: Subscription;

  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.subscription = this.tradeService.tradeChanged.subscribe(
      (res: any) => {
        this.tradeList = res;
      }
    );
  }

  getTradeList(form: NgForm) {
    const value = form.value;
    const condition = {'dateStart': value.dateStart, 'dateEnd': value.dateEnd };
    this.tradeService.getTradeData(condition);
  }

  updateTradeList(form: NgForm) {
    const data = form.value;
    this.tradeService.updateTradeList(data);
  }
}
