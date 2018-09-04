import { Component, OnInit } from '@angular/core';
import { VesService } from './ves.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ves',
  templateUrl: './ves.component.html',
  styleUrls: ['./ves.component.css']
})
export class VesComponent implements OnInit {
  id: number;
  productName: string;
  showLoader: boolean;
  response = [];
  body = '';
  count: '';
  filePath: string;
  company: any = [];
  storeproduct: any = [];
  key: string;
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(private router: Router,
    private vesService: VesService) { }

  ngOnInit() {
    document.title = 'View Product - Ves';
    this.getCompany();
  }
  getCompany() {
    this.showLoader = true;
    return this.vesService.getCompanyList().then(response => {
      this.showLoader = false;
      this.company = response.result;
      this.filePath = response.filePath;
      this.storeproduct = JSON.parse(JSON.stringify(response.result));
      this.count = response.count;
      const counties = this.count;
      return counties;
    }).catch(err => {
      this.showLoader = false;
    });
  }
  searchTerm(type) {
    this.company = this.storeproduct;
    this.company = this.company.filter(response => {
      const searchresult = false;
      console.log(response.category.name, 'hii');
      return (response.productName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
    });
  }
  private sendDelete($event: any, i): void {
    const index = this.response.indexOf(i);
    const body = { isDelete: true };
    this.showLoader = true;
    this.vesService.deleteCompany(i, body.isDelete).then(response => {
      this.company.splice(index, 1);
      this.showLoader = false;
    });
    $('.alert').css('z-index', '9999');
    $('#error-alert').fadeTo(2000, 500).slideUp(500, function () {
      $('#error-alert').slideUp(500);
      $('.alert').css('z-index', '-1000');
    });
    this.getCompany();
  }
  private sendCancel($event: any): void {
    // this.getProduct();
  }

}
