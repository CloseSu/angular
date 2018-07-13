import { Component, OnInit } from '@angular/core';
import {Trade} from '../Model/trade.nodel';
import {TradeService} from './trade.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {ChartService} from "../chart/chart.service";
import {LogService} from "../log-manager/log.service";
import {User} from "../Model/user.model";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  tradeList: Trade[];
  subscription: Subscription;
  user: User;

  constructor(private chartService: ChartService,
              private tradeService: TradeService,
              private logService: LogService) { }


  ngOnInit() {
    this.user = this.logService.user;
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

  setTradeData(form: NgForm) {
    const value = form.value;
    if (value.tradetype.toUpperCase() != "PB" &&
        value.tradetype.toUpperCase() != "PS" &&
        value.tradetype.toUpperCase() != "NS" &&
        value.tradetype.toUpperCase() != "NB") {
        alert("請輸入正確類別!")
    }

    if (value.date !== null && value.date !== '') {
      const trade = new Trade(this.user.userid,
        null,
        value.tradetype,
        value.date,
        value.buyPrice,
        value.sellPrice,
        value.buyUnits,
        value.sellUnits,
        null,
        null,
        value.percentage);
      this.chartService.setTradeData(trade);
      form.reset();
    }

  }
}
