import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from './auth.service';

@Component({
  selector: 'app-log-manager',
  templateUrl: './log-manager.component.html',
  styleUrls: ['./log-manager.component.css']
})
export class LogManagerComponent implements OnInit {
  name: string;
  password: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  onSignin(form: NgForm) {

  }

  getValidated() {
    return this.authService.getValidated();
  }
}
