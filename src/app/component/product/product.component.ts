import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductService } from './product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  productName: string;
  categoryName: string;
  response = [];
  body = '';
  name = '';
  documentPath: string;
  filePath: string;
  count = {};
  p = 1;
  showLoader = false;
  product: any = [];
  storeproduct: any = [];
  searchTerm$ = new Subject<string>();
  urlString: string;
  headerString: string;
  addButton: boolean;
  key: string;
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    document.title = 'View Product - Hochiki';
    console.log(this.route.snapshot.url[0].path, 'hiii');
    if (this.route.snapshot.url[0].path === 'product') {
      this.getProduct(0);
      this.urlString = 'product';
      this.headerString = 'Product Management';
      this.addButton = true;
    } else if (this.route.snapshot.url[0].path === 'hochiki') {
      this.getProduct(1);
      this.urlString = 'hochiki';
      this.headerString = 'Hochiki';
      this.addButton = false;
    } else if (this.route.snapshot.url[0].path === 'supression') {
      this.getProduct(2);
      this.urlString = 'supression';
      this.headerString = 'Hochiki-Suppression';
      this.addButton = false;
    } else if (this.route.snapshot.url[0].path === 'ves') {
      this.getProduct(3);
      this.urlString = 'ves';
      this.headerString = 'VES';
      this.addButton = false;
    } else if (this.route.snapshot.url[0].path === 'kentec') {
      this.getProduct(4);
      this.urlString = 'kentec';
      this.headerString = 'KENTEC';
      this.addButton = true;
    }
  }

  getProduct(cat: number) {
    this.showLoader = true;
    return this.productService.getProductList(cat).then(response => {
      this.showLoader = false;
      this.documentPath = response.documentPath;
      this.filePath = response.filePath;
      this.product = response.result;
      this.count = response.count;
      this.storeproduct = JSON.parse(JSON.stringify(response.result));
    }).catch(err => {
      this.showLoader = false;
    });
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
  }
  private sendCancel($event: any): void {
  }

  onChange(event: any, id: number) {
    this.productService.statusChange(event.target.checked, id).then(data => {
      this.showLoader = false;
      $('.alert').css('z-index', '9999');
      $('#success-alert-status').fadeTo(2000, 500).slideUp(500, function () {
        $('#success-alert-status').slideUp(500);
        $('.alert').css('z-index', '-1000');
      });
    }).catch(err => {
      this.showLoader = false;
    });
  }
}
