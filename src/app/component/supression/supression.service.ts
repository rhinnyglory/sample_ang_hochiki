import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpService } from '../../http.service';
import { ConstantApi } from '../../app.constantAPI';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProductAddModel } from '../../types/product';

@Injectable()
export class SupressionService {
  private companyUrl = 'products-list';
  private company = 'products';
  data: ProductAddModel[];

  constructor(private http: Http, private httpcaller: HttpService) { }


  getCompanyList() {
    return this.httpcaller.httpcall(this.companyUrl, 'post', { categoryId: 2});
  }
  getCompanyDetail(id) {
    return this.httpcaller.httpcall(this.companyUrl + '/' + id, 'get', { categoryId: 2});
  }

  updateCompany(id: string, details: any) {
    return this.httpcaller.httpformdatacall(this.company + '/' + id, 'put', details);
  }
  public deleteCompany(id, isDelete) {
    return this.httpcaller.httpcall(this.company + '/' + id, 'delete');
  }

}
