import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
// import { CompanyManagementComponent } from '../hochiki/company-management.component';
// import { VesComponent } from '../ves/ves.component';


@Component({
  // providers: [SupressionComponent, CompanyManagementComponent, VesComponent],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count: number;
  counthochiki: number;
  countves: number;
  countKent: number;
  showLoader = false;
  constructor(private prodServe: ProductService) { }

  ngOnInit() {
    document.title = 'dashboard - Hochiki';
    this.getHochiki(1);
    this.getSuppression(2);
    this.getVes(3);
    this.getKentec(4);
  }

  getHochiki(cat: number) {
    this.showLoader = true;
    this.prodServe.getProductList(cat).then(res => {
      this.counthochiki = res.count;
      this.showLoader = false;
    }).catch(err => {
      this.showLoader = false;
    });
  }

  getSuppression(cat: number) {
    this.showLoader = true;
    this.prodServe.getProductList(cat).then(res => {
      this.count = res.count;
      this.showLoader = false;
    }).catch(err => {
      this.showLoader = false;
    });
  }

  getVes(cat: number) {
    this.showLoader = true;
    this.prodServe.getProductList(cat).then(res => {
      this.countves = res.count;
      this.showLoader = false;
    }).catch(err => {
      this.showLoader = false;
    });
  }

  getKentec(cat: number) {
    this.showLoader = true;
    this.prodServe.getProductList(cat).then(res => {
      this.countKent = res.count;
      this.showLoader = false;
    }).catch(err => {
      this.showLoader = false;
    });
  }
}
