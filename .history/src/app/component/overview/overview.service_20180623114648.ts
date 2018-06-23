import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpService } from '../../http.service';
import { ConstantApi } from '../../app.constantAPI';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cluster1Model } from '../../types/cluster1';


@Injectable()
export class overviewService {
    private TrendGraphUrl = 'company-list';

    private GoogleAnalytics = 'http://192.168.1.205:3002/googleAnalytics/audience-overview';
    private GoogleGagsc = 'googleGaGsc';
 constructor(private _http: Http, private httpcaller: HttpService) { }


getCompanyList() {
    return this.httpcaller.httpcall(this.TrendGraphUrl, 'get', {});
  }

  createGraph(dates: Cluster1Model) {
    return this.httpcaller.httpcall(this.GoogleAnalytics, 'post', dates);
 }
 createcluster1(dates: Cluster1Model) {
  return this.httpcaller.httpcall(this.GoogleGagsc, 'post', dates);
}

}
