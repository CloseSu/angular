import {Component, OnDestroy, OnInit} from '@angular/core';
import {Future} from '../Model/future.model';
import {DataService} from './data.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.css']
})
export class DataManagerComponent implements OnInit, OnDestroy {
  futureList: Future[];
  subscription: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.futureChanged.subscribe(
      (data: Future[]) => {
        this.futureList = data;
      }
    );

  }

  getData() {
    this.dataService.getTodayData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
