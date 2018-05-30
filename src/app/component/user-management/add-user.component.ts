import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { UserService } from './user.service';
import { UserGroupModel } from '../../types/userGroup';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  isValidFormSubmitted = null;
  file: any;
  fileContent: any;
  form: any = {};
  submitted = false;
  nameempty = false;
  showpreview = false;
  showpreviewafterEdit = false;
  showLoader = false;
  title = 'Add User';
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
  userhtml: {};
  buttonTitle: string;
  private thumbnail = '';
  reader: any;
  countryId: any;
  stateId: any;
  showSelected = false;
 
  phoneempty= false;
  private countries: any = [];
  private states: any = [];
  private cities: any = [];
  private user: UserGroupModel;
  constructor( private router: Router,
    private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
      this.user = {
        firstName: '',
        email: '',
        lastName: '',
        mobile: '',
        countryId: {},
        stateId: {},
        cityId: {},
      } as UserGroupModel;
    }

  ngOnInit() {
  document.title = 'Add User - Hochiki';
  const userId = this.route.snapshot.params['id'];
  if (userId) {
    this.showpreviewafterEdit = true;
    this.title = 'Edit Product';
    this.buttonTitle = 'Update';
  } else {
    this.buttonTitle = 'Save';
  }
  this.CountrySelected();
 

  }



public CountrySelected() {
  return this.userService.getCountryList().then(response => {
    this.countries = response.result;
    this.user.countryId = response.result[0].id;
    this.StateSelected( response.result[0].id);
    
  });
}
public StateSelected(countryId) {
  return this.userService.getStateList(countryId).then(response => {
    this.states = response.result;

  });
}
public CitySelected(stateId) {
  return this.userService.getCityList(stateId).then(response => {
    this.cities = response.result;
  });
}

public onBlur(mobile){
  
   if(mobile !=undefined && mobile !=''){
    if(mobile.length < 10){
      this.showSelected = true;
      this.phoneempty = false;
    }else{
      this.showSelected = false;
    }
  }
  };
  public keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
  
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

saveUserDetails(form: NgForm) {
  this.isValidFormSubmitted = false;

  this.isValidFormSubmitted = true;
  this.showLoader = true;

    this.userService.addUser(this.user).then(users => {
      // this.loaderService.display(false);
      if ( users.success = true) {
        this.showLoader = false;
        $('.alert').css('z-index', '9999');
        $('#success-alert-user').fadeTo(2000, 500).slideUp(500, function () {
          $('#success-alert-user').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.router.navigate(['/user']);
      }else {
      }
    });

}

}
