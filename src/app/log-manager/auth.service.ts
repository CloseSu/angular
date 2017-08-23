import {Injectable} from '@angular/core';
import {User} from '../Model/user.model';

@Injectable()
export  class AuthService {
  validated = false;
  user: User;

  getValidated() {
    return this.validated;
  }

  setValidated(status: boolean) {
    this.validated = status;
  }

}
