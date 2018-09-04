import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { SupressionService } from './supression.service';
import { ProductAddModel } from '../../types/product';
import { ActivatedRoute, Router } from '@angular/router';
import { BootstrapAlertType } from '../../types/product';
import { BootstrapAlert } from '../../types/product';
import { BootstrapGrowlService } from './bootstrap-growl.service';


@Component({
  selector: 'app-supression-edit',
  templateUrl: './supression-edit.component.html',
  styleUrls: ['./supression-edit.component.css']
})
export class SupressionEditComponent implements OnInit {
  file: any;
  title = 'Add Company';
  buttonTitle: string;
  images = {};
  showpreview = false;
  showpreviewafterEdit = false;
  company: ProductAddModel;
  showLoader: boolean;
  constructor(private router: Router, private route: ActivatedRoute,
    private supressionService: SupressionService, private bootstrapGrowlService: BootstrapGrowlService) {
    this.company = {
      categoryId: {},
      documentName: {},
      category: {},
    } as ProductAddModel;

  }

  ngOnInit() {
    document.title = 'edit Supression - Hochiki';
    this.selectName();
    const userId = this.route.snapshot.params['id'];
    if (userId) {
      this.showLoader = true;
      this.showpreviewafterEdit = true;
      this.title = 'Edit Product';
      this.buttonTitle = 'Update';
      this.supressionService.getCompanyDetail(userId).then(users => {
        this.company = users.result;
        this.showLoader = false;
      }).catch(err => {
        this.showLoader = false;
      });
    } else {
      this.buttonTitle = 'save';
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
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.company.documentName = event.target.files[0];
    }
  }


  selectName() {
  }

  saveCompanyDetails() {
    this.showLoader = true;
    const userId = this.route.snapshot.params['id'];
    const infoUpdated: FormData = new FormData();
    if (typeof this.company.category === 'object') {
      this.company.categoryId = 2;
    }
    for (const keys in this.company) {
      if (keys !== 'file' || 'event') {
        infoUpdated.append(keys, this.company[keys]);
      }
    }
    this.supressionService.updateCompany(userId, infoUpdated).then(users => {
      this.showLoader = false;
      $('.alert').css('z-index', '9999');
      $('#updated-alert').fadeTo(2000, 500).slideUp(500, function () {
        $('#updated-alert').slideUp(500);
        $('.alert').css('z-index', '-1000');
      });
      this.router.navigate(['/supression']);
    });
  }
}
