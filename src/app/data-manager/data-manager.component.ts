import { Component, OnInit } from '@angular/core';
import {Future} from '../Model/future.model';

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.css']
})
export class DataManagerComponent implements OnInit {
  futureList: Future[];
  date: string;

  constructor() { }

  ngOnInit() {
    this.futureList = [
    new Future(
      'TX',
    201709,
    10247,
      10278,
      10234,
      10253	,
      -4,
      -0.04,
      23196,
      0,
      0,
      10253,
      10254,
      10528,
      8430
    )];
    this.date = '2017/08/21';
  }

  getData() {

  }

}
