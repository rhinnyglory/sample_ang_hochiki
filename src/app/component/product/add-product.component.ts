import { Component, OnInit, ViewContainerRef } from '@angular/core';
// import { FileValidator } from './file.validator';
// import { FileValueAccessor } from './file-control-value-accessor';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { ProductService } from './product.service';
import { ProductAddModel } from '../../types/product';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isValidFormSubmitted = null;
  file: any;
  fileContent: any;
  form: any = {};
  submitted = false;
  nameempty = false;
  images = {};
  showpreview = false;
  showpreviewafterEdit = false;
  documentName = false;
  showLoader: boolean;
  title = 'Add Product';
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
  userhtml: {};
  buttonTitle: string;
  pdf = '';
  thumbnail = '';
  reader: any;
  categories: any = [];
  product: ProductAddModel;
  documentPath: string;
  filePath: string;
  urlString: string;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.product = {
      categoryId: {},
      documentName: {},
      category: {},
      isYoutube: true
    } as ProductAddModel;
    document.title = 'Add Product - Hochiki';
    this.product.documentName = false;
    const userId = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.url[0].path, 'hiii');
    if (this.route.snapshot.url[0].path === 'product') {
      this.urlString = 'product';
    } else if (this.route.snapshot.url[0].path === 'hochiki') {
      this.urlString = 'hochiki';
    } else if (this.route.snapshot.url[0].path === 'supression') {
      this.urlString = 'supression';
    } else if (this.route.snapshot.url[0].path === 'ves') {
      this.urlString = 'ves';
    }
    if (userId) {
      this.showLoader = true;
      this.showpreviewafterEdit = true;
      this.title = 'Edit Product';
      this.buttonTitle = 'Update';
      this.productService.getProductDetail(userId).then(users => {
        this.showLoader = false;
        this.product = users.result;
        if (!this.product.isYoutube) {
          this.product.videoUrl = '';
        }
        this.documentPath = users.documentPath;
        this.filePath = users.filePath;
      });
    } else {
      this.buttonTitle = 'Save';
    }
    this.onOptionsSelected();
    this.selectName();
  }

  uploadImage(file) {
    if (file.target.files.length > 0) {
      this.product.image = file.target.files[0];
    }
    if (file.target.files && file.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.images = event.target.result;
        this.showpreview = true;
        this.showpreviewafterEdit = false;
      };
      reader.readAsDataURL(file.target.files[0]);
    }
  }
  fileChange(event) {
    this.product.documentName = true;
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.product.documentName = event.target.files[0];
    }
  }

  videoUpload(event) {
    if (this.product.isYoutube === false) {
      const fileList: FileList = event.target.files;
      if (fileList.length > 0 && fileList[0].type === 'video/mp4') {
        this.product.mp4Video = event.target.files[0];
      } else {
        this.product.mp4Video = null;
        $('.alert').css('z-index', '9999');
        $('#error-wrong-file').fadeTo(2000, 500).slideUp(500, function () {
          $('#error-wrong-file').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
      }
    }
    console.log(this.product.mp4Video, '123');
  }

  threeDChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0 && fileList[0].name.split('.')[1] === 'obj') {
      this.product.objFile = event.target.files[0];
    } else {
      this.product.objFile = null;
      $('.alert').css('z-index', '9999');
      $('#error-wrong-file').fadeTo(2000, 500).slideUp(500, function () {
        $('#error-wrong-file').slideUp(500);
        $('.alert').css('z-index', '-1000');
      });
    }
  }

  public onOptionsSelected() {
    return this.productService.getCategoryList().then(response => {
      this.categories = response.result;
    });
  }
  selectName() {
  }

  saveCompanyDetails() {
    this.isValidFormSubmitted = false;
    // if (form.invalid) {
    //   return;
    // }
    this.isValidFormSubmitted = true;
    this.showLoader = true;
    const userId = this.route.snapshot.params['id'];
    const info: FormData = new FormData();
    if (!userId) {
      if (typeof this.product.category === 'object') {
        this.product.categoryId = this.product.category.id;
      }
      for (const key in this.product) {
        if (key !== 'file' || 'event') {
          info.append(key, this.product[key]);
        }
      }
      this.productService.createProduct(info).then(users => {
        this.showLoader = false;
        $('.alert').css('z-index', '9999');
        $('#success-alert-prod').fadeTo(2000, 500).slideUp(500, function () {
          $('#success-alert-prod').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.router.navigate(['/' + this.urlString]);
      }).catch(err => {
        $('.alert').css('z-index', '9999');
        $('#error-alert-prod').fadeTo(2000, 500).slideUp(500, function () {
          $('#error-alert-prod').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
      });
    } else {
      if (typeof this.product.category === 'object') {
        this.product.categoryId = this.product.category.id;
      }
      if (!this.product.isYoutube) {
        delete this.product.videoUrl;
      }
      for (const keys in this.product) {
        if (keys !== 'file' || 'event') {
          info.append(keys, this.product[keys]);
        }
      }
      this.productService.updateProduct(userId, info).then(users => {
        this.showLoader = false;
        $('.alert').css('z-index', '9999');
        $('#updated-alert').fadeTo(2000, 500).slideUp(500, function () {
          $('#updated-alert').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.router.navigate(['/' + this.urlString]);
      }).catch(err => {
        $('.alert').css('z-index', '9999');
        $('#error-alert-prod').fadeTo(2000, 500).slideUp(500, function () {
          $('#error-alert-prod').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
      });
    }
  }
}
