import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpService } from '../../http.service';
import { ConstantApi } from '../../app.constantAPI';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProductAddModel } from '../../types/product';

@Injectable()
export class CompanyService {
  private companyUrl = 'products-list';
  // private company = 'company';
  private productUrl = 'products-list';
  private company = 'products';
  data: ProductAddModel[];

  constructor(private http: Http, private httpcaller: HttpService) { }


  getCompanyList() {
    return this.httpcaller.httpcall(this.companyUrl, 'post', { categoryId: 1});
  }
  createCompany(data) {
    console.log(data, 'data');
    return this.httpcaller.httpformdatacall(this.company, 'post', data);
  }
  public deleteCompany(id, isDelete) {
    console.log(id, isDelete);
    console.log(id);
    return this.httpcaller.httpcall(this.company + '/' + id, 'delete');
  }
  getCompanyDetail(id) {
    return this.httpcaller.httpcall(this.productUrl + '/' + id, 'get', { categoryId: 1});
  }

  updateCompany(id: string, details: any) {
    return this.httpcaller.httpformdatacall(this.company + '/' + id, 'put', details);
  }

  // getProductList() {
  //   return this.httpcaller.httpcall(this.productUrl, 'post', {});
  // }
  // createProduct(data) {
  //   console.log(data, 'data');
  //   return this.httpcaller.httpformdatacall(this.product, 'post', data);
  // }
  // public deleteProduct(id, isDelete) {
  //   return this.httpcaller.httpcall(this.product + '/' + id, 'delete');
  // }
  // getProductDetail(id) {
  //   return this.httpcaller.httpcall(this.productUrl + '/' + id, 'get', {});
  // }

  // updateProduct(id: string, details: any) {
  //   return this.httpcaller.httpformdatacall(this.product + '/' + id, 'put', details);
  // }



}
