import { Injectable } from '@angular/core';
import { ConstantApi } from './../../app.constantAPI';
import { HttpService } from './../../http.service';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class RoleInfoService {

  constructor(private _http: Http, private httpcaller: HttpService) { }

  addRole(role: object) {
    return this.httpcaller.httpcall(ConstantApi.addroles, 'post', role);
  }

  getRoles() {
    return this.httpcaller.httpcall(ConstantApi.roles, 'get', {});
  }

  getRoleDetail(id: number) {
    return this.httpcaller.httpcall(ConstantApi.roles + '/' + id, 'get', {});
  }

  updateRole(role: object, id: number) {
    return this.httpcaller.httpcall(ConstantApi.addroles + '/' + id, 'put', role);
  }

  deleteRole(id: number, isDelete: boolean) {
    return this.httpcaller.httpcall(ConstantApi.addroles + '/' + id, 'post', { 'isDelete': isDelete });
  }
}
