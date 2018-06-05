import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users = [];
  showLoader = false;
  searchUser = [];
  key: string;
  reverse = false;
  private count = {};
  constructor(private user: UserService) { }

  ngOnInit() {
    this.getUsersList();
  }
  getUsersList() {
    this.showLoader = true;
    this.user.getUsers().then(data => {
      this.users = data.result;
      this.showLoader = false;
      this.count = data.count;
      this.searchUser = JSON.parse(JSON.stringify(data.result));
    }).catch(err => {
      console.log(err, '123');
      this.showLoader = false;
    });
  }

  onChange(event: any, id: number) {
    this.user.statusChange(event, id).then(data => {
      this.showLoader = false;
      $('.alert').css('z-index', '9999');
      $('#success-alert-status').fadeTo(2000, 500).slideUp(500, function () {
        $('#success-alert-status').slideUp(500);
        $('.alert').css('z-index', '-1000');
      });
    }).catch(err => {
      console.log(err, '456');
    });
  }

  searchTerm(type) {
    this.users = this.searchUser;
    this.users = this.users.filter(response => {
      return (response.firstName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (response.lastName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (response.email.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1)
        || (JSON.stringify(response.mobile).indexOf(type.toLowerCase()) !== -1);
    });
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  private sendDelete($event: any, i): void {
    const index = this.users.indexOf(i);
    const body = { isDelete: true };
    this.user.deleteUser(i.id).then(response => {
      this.users.splice(index, 1);
    });
    $('.alert').css('z-index', '9999');
    $('#error-alert-user').fadeTo(2000, 500).slideUp(500, function () {
      $('#error-alert-user').slideUp(500);
      $('.alert').css('z-index', '-1000');
    });
  }

  private sendCancel($event: any): void {
  }
}
