import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FileValidator } from './file.validator';
import { FileValueAccessor } from './file-control-value-accessor';
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
  showLoader = false;
  title = 'Add Product';
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
  userhtml: {};
  buttonTitle: string;
  pdf = '';
  private thumbnail = '';
  reader: any;
  private categories: any = [];
  private product: ProductAddModel;
  constructor(private router: Router, private route: ActivatedRoute,
    private productService: ProductService, private formBuilder: FormBuilder) {
    this.product = {
      productName: '',
      productCode: '',
      image: '',
      categoryId: {},
      documentName: {},
      category: {},
    } as ProductAddModel;
  }
  ngOnInit() {
    document.title = 'Add Product - Hochiki';
    this.product.documentName = false;
    const userId = this.route.snapshot.params['id'];
    if (userId) {
      this.showpreviewafterEdit = true;
      this.title = 'Edit Product';
      this.buttonTitle = 'Update';
      this.productService.getProductDetail(userId).then(users => {
        this.product = users.result;
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

  public onOptionsSelected() {
    return this.productService.getCategoryList().then(response => {
      this.categories = response.result;
    });
  }
  selectName() {
  }



  saveCompanyDetails(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    // this.loaderService.display(true);
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
        // this.loaderService.display(false);
        this.showLoader = false;
        this.productService.getProductList();
        $('.alert').css('z-index', '9999');
        $('#success-alert').fadeTo(2000, 500).slideUp(500, function () {
          $('#success-alert').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.router.navigate(['/product']);
      });
    } else {
      if (typeof this.product.category === 'object') {
        this.product.categoryId = this.product.category.id;
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
        this.router.navigate(['/product']);
      });
    }
  }
}
