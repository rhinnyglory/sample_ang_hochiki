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

  phoneempty = false;
  private countries: any = [];
  private states: any = [];
  private cities: any = [];
  private roles: any = [];
  private user: UserGroupModel;
  editEmail = true;
  constructor(private router: Router,
    private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.user = {
      country: {},
      state: {},
      city: {},
    } as UserGroupModel;
  }
  userId: number;

  ngOnInit() {
    document.title = 'Add User - Hochiki';
    this.userId = this.route.snapshot.params['id'];
    this.userService.getCountries().then(data => {
      this.countries = data.result;
    });
    this.getRoles();
    if (this.userId) {
      this.editEmail = false;
      this.showpreviewafterEdit = true;
      this.title = 'Edit Product';
      this.buttonTitle = 'Update';
      this.getUserDetails(this.userId);
    } else {
      this.editEmail = true;
      this.buttonTitle = 'Save';
    }
  }

  getUserDetails(userId) {
    this.userService.getUserDetails(this.userId).then(res => {
      this.user = res.result;
      this.user.countryId = res.result.countryId;
      this.userService.getStates(res.result.countryId).then(res1 => {
        this.states = res1.result;
      });
      this.userService.getCities(res.result.stateId).then(res2 => {
        this.cities = res2.result;
      });
    });
  }

  public getRoles() {
    return this.userService.getUserRoles().then(response => {
      this.roles = response.result;
    });
  }

  public onBlur(mobile) {
    if (mobile !== undefined && mobile !== '') {
      if (mobile.length < 10) {
        this.showSelected = true;
        this.phoneempty = false;
      } else {
        this.showSelected = false;
      }
    }
  }

  /**
	* Method for Get the states based on country
	*
	* @method getStatesList
	* @param {String} Country ID
	* @return {Object} Available States
	*/
  getStatesList() {
    this.userService.getStates(this.user.countryId).then(data => {
      this.states = data.result;
    });
    this.cities = [];
    this.user.stateId = null;
    this.user.cityId = null;
  }
  /**
	* Method for Get the cities based on state
	*
	* @method getCitiesList
	* @param {String} State ID
	* @return {Object} Available Cities
	*/
  getCitiesList() {
    this.userService.getCities(this.user.stateId).then(data => {
      this.cities = data.result;
    });
  }


  public keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  saveUserDetails(form: NgForm, user) {
    this.isValidFormSubmitted = false;
    this.isValidFormSubmitted = true;
    this.showLoader = true;
    if (this.userId) {
      this.userService.updateUser(user, this.userId).then(users => {
        if (users.success = true) {
          this.showLoader = false;
          $('.alert').css('z-index', '9999');
          $('#success-alert-user-updated').fadeTo(2000, 500).slideUp(500, function () {
            $('#success-alert-user-updated').slideUp(500);
            $('.alert').css('z-index', '-1000');
          });
          this.router.navigate(['/user']);
        } else {
          this.router.navigate(['/user']);
        }
      }).catch(err => {
        $('.alert').css('z-index', '9999');
        $('#error-alert-user').fadeTo(2000, 500).slideUp(500, function () {
          $('#error-alert-user').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.showLoader = false;
      });
    } else {
      this.userService.addUser(this.user).then(users => {
        if (users.success = true) {
          this.showLoader = false;
          $('.alert').css('z-index', '9999');
          $('#success-alert-user').fadeTo(2000, 500).slideUp(500, function () {
            $('#success-alert-user').slideUp(500);
            $('.alert').css('z-index', '-1000');
          });
          this.router.navigate(['/user']);
        } else {
          this.router.navigate(['/user']);
        }
      }).catch(err => {
        $('.alert').css('z-index', '9999');
        $('#error-alert-user').fadeTo(2000, 500).slideUp(500, function () {
          $('#error-alert-user').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.showLoader = false;
      });
    }
  }

}
