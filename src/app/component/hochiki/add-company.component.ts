import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { CompanyService } from './company.service';
import { ProductAddModel } from '../../types/product';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  file: any;
  title = 'Add Product';
  showLoader = false;
  images = {};
  showpreview = false;
  showpreviewafterEdit = false;
  buttonTitle: string;
  company: ProductAddModel;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService) {
    this.company = {
      categoryId: {},
      documentName: {},
      category: {},
    } as ProductAddModel;

  }

  ngOnInit() {
    document.title = 'edit Hochiki - Hochiki';
    this.selectName();
    const userId = this.route.snapshot.params['id'];
    if (userId) {
      this.showpreviewafterEdit = true;
      this.title = 'Edit Product';
      this.buttonTitle = 'Update';
      this.companyService.getCompanyDetail(userId).then(users => {
        this.company = users.result;
      });
    } else {
      this.buttonTitle = 'Save';
    }
  }
  uploadImage(file) {
    if (file.target.files.length > 0) {
      this.company.image = file.target.files[0];
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
    console.log(event);
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      console.log('ssss');
      this.company.documentName = event.target.files[0];
    }
  }


  selectName() {
  }

  saveCompanyDetails() {
    const userId = this.route.snapshot.params['id'];
    this.showLoader = true;
    if (!userId) {
      const info: FormData = new FormData();
      info.append('categoryId', '1');
      for (const key in this.company) {
        if (key !== 'file') {
          info.append(key, this.company[key]);
        }
      }
      this.companyService.createCompany(info).then(users => {
        this.showLoader = false;
        this.companyService.getCompanyList();
        $('.alert').css('z-index', '9999');
        $('#success-alert').fadeTo(2000, 500).slideUp(500, function () {
          $('#success-alert').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.router.navigate(['/hochiki']);
      });
    } else {
      const infoUpdated: FormData = new FormData();

      if (typeof this.company.category === 'object') {
        this.company.categoryId = 1;
      }
      for (const keys in this.company) {
        if (keys !== 'file' || 'event') {
          infoUpdated.append(keys, this.company[keys]);
        }
      }
      this.companyService.updateCompany(userId, infoUpdated).then(users => {
        this.showLoader = false;
        // this.loaderService.display(false);
        $('.alert').css('z-index', '9999');
        $('#updated-alert').fadeTo(2000, 500).slideUp(500, function () {
          $('#updated-alert').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.router.navigate(['/hochiki']);
      });
    }
  }


}
