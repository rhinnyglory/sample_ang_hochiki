

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../../http.service';
import { ConstantApi } from '../../app.constantAPI';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Login } from '../../types/login';
import { Constant } from '../../app.constant';


declare var $: any;

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router, private httpcaller: HttpService) { }

  private tokenUrl = Constant.url + 'admin-login';
  private forget = 'forget-password';

  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  login(login: Login): Observable<any> {
    const data = { ...login };
    return this.http.post<Login>(this.tokenUrl, $.param(data), { headers: this.headers, observe: 'response' });
  }
  createPassword(data) {
    return this.httpcaller.httpformdatacall(this.forget, 'post', data);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
