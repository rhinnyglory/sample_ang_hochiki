import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpService } from '../../http.service';
import { ConstantApi } from '../../app.constantAPI';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProductAddModel } from '../../types/product';

@Injectable()
export class ProductService {
  productUrl = 'products-list';
  product = 'products';
  categoryDropdown = 'category-dropdown';
  data: ProductAddModel[];
  category: number;
  constructor(private route: Router, private http: Http, private httpcaller: HttpService) { }


  getProductList(catId: number) {
    if (catId === 0) {
      delete this.category;
    } else {
      this.category = catId;
    }
    return this.httpcaller.httpcall(this.productUrl, 'post', { categoryId: this.category });
  }
  getCategoryList() {
    return this.httpcaller.httpcall(this.categoryDropdown, 'get', {});
  }
  createProduct(data) {
    return this.httpcaller.httpformdatacall(this.product, 'post', data);
  }
  public deleteProduct(id, isDelete) {
    return this.httpcaller.httpcall(this.product + '/' + id, 'delete');
  }
  getProductDetail(id) {
    return this.httpcaller.httpcall(this.productUrl + '/' + id, 'get', {});
  }

  updateProduct(id: string, details: any) {
    return this.httpcaller.httpformdatacall(this.product + '/' + id, 'put', details);
  }
  getproductSearch(categoryName) {
    return this.httpcaller.httpcall(this.productUrl, 'post', { categoryName: '' });
  }
  statusChange(status: boolean, id: number) {
    return this.httpcaller.httpcall(this.product + '/' + id + '/' + status, 'get', {});
  }

}
