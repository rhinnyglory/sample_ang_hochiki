

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Login } from '../../types/login';
import { Constant } from '../../app.constant';


declare var $: any;

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  // private tokenUrl = Constant.url + 'admin-login';
  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  // login(login): Observable<any> {
  //   const data = { ...login };
  //   return();
  // }

  logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('auth');
    this.router.navigate(['/login']);
}
}
