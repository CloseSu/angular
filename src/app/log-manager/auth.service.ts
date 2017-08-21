import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export  class AuthService {
  validated = true;

  logout() {
  }

  getValidated() {
    return this.validated;
  }
}
