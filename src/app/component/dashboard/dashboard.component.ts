import { Component, OnInit } from '@angular/core';
import { SupressionComponent } from '../supression/supression.component';
import { CompanyManagementComponent } from '../hochiki/company-management.component';
import { VesComponent } from '../ves/ves.component';


@Component({
  providers: [SupressionComponent, CompanyManagementComponent, VesComponent],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count: {};
  counthochiki: {};
  countves: {};
  showLoader = false;
  constructor(private supressioncomp: SupressionComponent,
    private hochikicomp: CompanyManagementComponent,
    private vescomp: VesComponent) { }

  ngOnInit() {
    // const counties;
    this.showLoader = true;
    document.title = 'dashboard - Hochiki';
    this.supressioncomp.getCompany().then((response) => {
      this.showLoader = false;
      this.count = response;
    });
    this.hochikicomp.getCompany().then((response) => {
      this.showLoader = false;
      this.counthochiki = response;
    });
    this.vescomp.getCompany().then((response) => {
      this.showLoader = false;
      this.countves = response;
    });
  }



}
