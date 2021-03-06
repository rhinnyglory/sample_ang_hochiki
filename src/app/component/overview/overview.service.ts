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

    private GoogleAnalytics = 'googleAnalytics/audience-overview/1';
    private GoogleAnalyticsMetrics = 'googleAnalytics/audience-overview/0';
    private GoogleGagsc = 'googleGaGsc';
    private overview = 'googleAnalytics/user-explorer';
 constructor(private _http: Http, private httpcaller: HttpService) { }


getCompanyList() {
    return this.httpcaller.httpcall(this.TrendGraphUrl, 'get', {});
  }

  createGraph(dates: Cluster1Model) {
    return this.httpcaller.httpcall(this.GoogleAnalytics, 'post', dates);
 }
 createMetrics(dates: Cluster1Model) {
  return this.httpcaller.httpcall(this.GoogleAnalyticsMetrics, 'post', dates);
}
overviewList(dates: Cluster1Model) {
  return this.httpcaller.httpcall(this.overview, 'post', dates);
}


}
