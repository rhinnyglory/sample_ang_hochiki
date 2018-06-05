import { Injectable } from '@angular/core';
import { ConstantApi } from './../../app.constantAPI';
import { HttpService } from './../../http.service';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http, private httpcaller: HttpService) { }

  getCountries() {
    return this.httpcaller.httpcall(ConstantApi.country, 'get', {});
  }

  getStates(id) {
    return this.httpcaller.httpcall(ConstantApi.state + id, 'get', {});
  }

  getCities(id) {
    return this.httpcaller.httpcall(ConstantApi.city + id, 'get', {});
  }

  addUser(user: object) {
    return this.httpcaller.httpcall(ConstantApi.addUser, 'post', user);
  }

  getUsers() {
    return this.httpcaller.httpcall(ConstantApi.users, 'get', {});
  }

  statusChange(status: boolean, id: number) {
    return this.httpcaller.httpcall(ConstantApi.status + id, 'put', { 'isActive': status });
  }

  getUserRoles() {
    return this.httpcaller.httpcall(ConstantApi.roleDropdown, 'get', {});
  }

  deleteUser(id) {
    return this.httpcaller.httpcall(ConstantApi.user + '/' + id, 'delete', {});
  }

  updateUser(user: object, id: number) {
    return this.httpcaller.httpcall(ConstantApi.userUpdate + '/' + id, 'put', user);
  }

  getUserDetails(id: number) {
    return this.httpcaller.httpcall(ConstantApi.userProfile + '/' + id, 'get', {});
  }
}
