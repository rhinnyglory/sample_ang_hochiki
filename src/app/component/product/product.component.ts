import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  response = [];
  private body = '';
  private name = '';
  private documentPath: string;
  private filePath: string;
  private count = {};
  p = 1;
  showLoader = false;
  private product: any = [];
  private storeproduct: any = [];
  searchTerm$ = new Subject<string>();
  // key: string;
  // reverse = false;
  // sort(key) {
  //   this.key = key;
  //   this.reverse = !this.reverse;
  // }
  constructor(private router: Router,
    private productService: ProductService) {

  }

  ngOnInit() {
    document.title = 'View Product - Hochiki';
    this.showLoader = true;
    this.getProduct();
  }

  getProduct() {
    return this.productService.getProductList().then(response => {
      this.showLoader = false;
      this.documentPath = response.documentPath;
      this.filePath = response.filePath;
      this.product = response.result;
      this.count = response.count;
      this.storeproduct = JSON.parse(JSON.stringify(response.result));
    });
  }
  delUser(i) {
  }

  searchTerm(type) {
    this.product = this.storeproduct;
    this.product = this.product.filter(response => {
      return (response.category.name.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (response.productName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
    });
  }
  private sendDelete($event: any, i): void {
    const index = this.response.indexOf(i);
    const body = { isDelete: true };
    this.productService.deleteProduct(i, body.isDelete).then(response => {
      this.product.splice(index, 1);
      console.log(i, 'index');
    });
    $('.alert').css('z-index', '9999');
    $('#error-alert').fadeTo(2000, 500).slideUp(500, function () {
      $('#error-alert').slideUp(500);
      $('.alert').css('z-index', '-1000');
    });
    this.getProduct();
  }
  private sendCancel($event: any): void {
  }

}
