import { Injectable } from '@angular/core';
import { ConstantApi } from './../../app.constantAPI';
import { HttpService } from './../../http.service';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class FeedbckService {

  constructor(private _http: Http, private httpcaller: HttpService) { }
  getFeedbacks() {
    return this.httpcaller.httpcall(ConstantApi.feedsList, 'get', {});
  }

  getFeedDetail(id: number) {
    return this.httpcaller.httpcall(ConstantApi.feeDetail + id, 'get', {});
  }
}
