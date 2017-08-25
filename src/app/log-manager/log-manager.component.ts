import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {LogService} from './log.service';
import {User} from '../Model/user.model';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-log-manager',
  templateUrl: './log-manager.component.html',
  styleUrls: ['./log-manager.component.css']
})
export class LogManagerComponent implements OnInit, OnDestroy {
  returnMsg: string;
  subscription: Subscription;

  constructor(private logService: LogService,
            private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.logService.msgChanged.subscribe(
      (msg: string) => {
        this.returnMsg = msg;
      }
    );
  }

  signin(form: NgForm) {
    const value = form.value;
    const user = new User(null, value.name, value.password);
    this.logService.signin(user);
  }
  signup(form: NgForm) {
    const value = form.value;
    const user = new User(null, value.name, value.password);
    this.logService.saveUser(user);
  }

  logOut(form: NgForm) {
    form.reset();
    this.authService.setValidated(false);
    this.logService.clearUser();
    this.returnMsg = 'Log out success!';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
