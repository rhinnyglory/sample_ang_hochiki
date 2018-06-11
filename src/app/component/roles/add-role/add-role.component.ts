import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Roles } from './../../../types/roles';
import { RoleInfoService } from './../role-info.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  role = {} as Roles;
  title: string;
  buttonTitle: string;
  showLoader = false;
  isValidFormSubmitted = null;
  userId: number;
  constructor(private router: Router, private route: ActivatedRoute, private roleServe: RoleInfoService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId) {
      // this.showpreviewafterEdit = true;
      this.title = 'Edit Product';
      this.buttonTitle = 'Update';
      this.roleServe.getRoleDetail(this.userId).then(res => {
        this.role = res.result;
      });
    } else {
      this.buttonTitle = 'Save';
    }
  }

  addRole(form: NgForm) {
    this.isValidFormSubmitted = false;
    this.isValidFormSubmitted = true;
    this.showLoader = true;
    if (this.userId) {
      this.roleServe.updateRole(this.role, this.userId).then(res => {
        // this.loaderService.display(false);
        if (res.success = true) {
          this.showLoader = false;
          $('.alert').css('z-index', '9999');
          $('#updated-alert-role').fadeTo(2000, 500).slideUp(500, function () {
            $('#updated-alert-role').slideUp(500);
            $('.alert').css('z-index', '-1000');
          });
          this.router.navigate(['/roles']);
        } else {
        }
      }).catch(err => {
        $('.alert').css('z-index', '9999');
        $('#error-alert-role-state').fadeTo(2000, 500).slideUp(500, function () {
          $('#error-alert-role-state').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.showLoader = false;
      });
    } else {
      this.roleServe.addRole(this.role).then(res => {
        // this.loaderService.display(false);
        if (res.success = true) {
          this.showLoader = false;
          $('.alert').css('z-index', '9999');
          $('#success-alert-role').fadeTo(2000, 500).slideUp(500, function () {
            $('#success-alert-role').slideUp(500);
            $('.alert').css('z-index', '-1000');
          });
          this.router.navigate(['/roles']);
        } else {
        }
      }).catch(err => {
        $('.alert').css('z-index', '9999');
        $('#error-alert-role-state').fadeTo(2000, 500).slideUp(500, function () {
          $('#error-alert-role-state').slideUp(500);
          $('.alert').css('z-index', '-1000');
        });
        this.showLoader = false;
      });
    }
  }
}
