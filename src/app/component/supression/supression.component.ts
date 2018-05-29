import { Component, OnInit } from '@angular/core';
import { SupressionService } from './supression.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supression',
  templateUrl: './supression.component.html',
  styleUrls: ['./supression.component.css']
})
export class SupressionComponent implements OnInit {
  response = [];
  private body= '';
  public count: '';
  showLoader = false;
  private company: any = [];
  private storeproduct: any = [];
  key: string;
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(  private router: Router,
    private supressionService: SupressionService) { }

    ngOnInit() {
      document.title = 'View Product - Supression';
      this.showLoader = true;
    this.getCompany();

    // this.countDetails();
  }
  getCompany() {
   return this.supressionService.getCompanyList().then(response => {
    this.showLoader = false;
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
   private sendDelete($event: any, i): void {
    const index = this.response.indexOf(i);
    const body = { isDelete: true };
    this.supressionService.deleteCompany(i, body.isDelete).then(response => {
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
