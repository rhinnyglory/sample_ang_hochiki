import { Component, OnInit } from '@angular/core';
import { RoleInfoService } from './role-info.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  id: number;
  userName: string;
  rolesList = [];
  showLoader = false;
  searchUser = [];
  key: string;
  reverse = false;
  count = {};
  constructor(private role: RoleInfoService) { }

  ngOnInit() {
    this.getUsersList();
  }
  getUsersList() {
    this.showLoader = true;
    this.role.getRoles().then(data => {
      this.rolesList = data.result;
      this.showLoader = false;
      this.count = data.count;
      this.searchUser = JSON.parse(JSON.stringify(data.result));
    }).catch(err => {
      this.showLoader = false;
    });
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  private sendDelete($event: any, i): void {
    const index = this.rolesList.indexOf(i);
    const body = { isDelete: true };
    this.role.deleteRole(i.id, body.isDelete).then(response => {
      this.rolesList.splice(index, 1);
    });
    $('.alert').css('z-index', '9999');
    $('#error-alert-role').fadeTo(2000, 500).slideUp(500, function () {
      $('#error-alert-role').slideUp(500);
      $('.alert').css('z-index', '-1000');
    });
  }

  private sendCancel($event: any): void {
  }

  searchTerm(type) {
    this.rolesList = this.searchUser;
    this.rolesList = this.rolesList.filter(response => {
      return (response.name.toLowerCase().indexOf(type.toLowerCase()) !== -1)
        || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
    });
  }
}
