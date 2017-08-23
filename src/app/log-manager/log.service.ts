
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../Model/user.model';
import {AuthService} from './auth.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LogService {
  msgChanged = new Subject<string>();
  userChanged = new Subject<User>();

  constructor(private http: Http,
            private authservice: AuthService) {}

  saveUser(user: User) {
    return this.http.post('http://localhost:8080/signUp', user).subscribe(
       res => {
         const data = res.json();
         this.authservice.setValidated(data.result);
         this.msgChanged.next(data.returnMsg);
       }
    );
  }

  signin(user: User) {
    return this.http.post('http://localhost:8080/signIn', user).subscribe(
      res => {
        const data = res.json();
        this.authservice.setValidated(data.result);
        this.msgChanged.next(data.returnMsg);
        this.userChanged.next(data.user);
      }
    );
  }
}
