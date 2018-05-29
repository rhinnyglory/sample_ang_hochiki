import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css']
})
export class CompanyManagementComponent implements OnInit {
  response = [];
  private body= '';
  public count: '';
  private company: any = [];
  private storeproduct: any = [];
  key: string;
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(  private router: Router,
    private companyService: CompanyService) { }

    ngOnInit() {
      document.title = 'View Product - Hochiki';

    this.getCompany();
  }
  getCompany() {

   return this.companyService.getCompanyList().then(response => {
      this.company = response.result;
      this.storeproduct = JSON.parse(JSON.stringify(response.result));
      this.count = response.count;
      const counties = this.count;

      return counties;
    });
  }
  searchTerm(type) {
    this.company = this.storeproduct;
    this.company = this.company.filter(response => {
      const searchresult = false;
      console.log(response.category.name, 'hii');
      return (response.productName.toLowerCase().indexOf(type.toLowerCase()) !== -1) || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
    });
   }
  delUser(i) {
    const index = this.response.indexOf(i);
    const body = { isDelete: true };
    this.companyService.deleteCompany(i, body.isDelete).then(response => {
        this.company.splice(index, 1);

    });


    this.getCompany();
}

private sendDelete($event: any, i): void {
  const index = this.response.indexOf(i);
  const body = { isDelete: true };
  this.companyService.deleteCompany(i, body.isDelete).then(response => {
      this.company.splice(index, 1);
  });
  $('.alert').css('z-index', '9999');
  $('#error-alert').fadeTo(2000, 500).slideUp(500, function(){
    $('#error-alert').slideUp(500);
    $('.alert').css('z-index', '-1000');
  });
  this.getCompany();
}
private sendCancel($event: any): void {
  // this.getProduct();
}

}
