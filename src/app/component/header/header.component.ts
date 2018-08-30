import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from '../login-page/login.service';
import { Overlay } from 'ngx-modialog';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { HeaderService } from '../header/header.service';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


import { fadeInAnimation } from '../../_animations/index';


@Component({
  selector: 'app-header',
  moduleId: module.id.toString(),
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent implements OnInit {
  model;
  first = '';
  last = '';
  constructor(private htpservice: HeaderService,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('firstName')) {
      this.first = localStorage.getItem('firstName').charAt(0).toUpperCase();
    }
    if (localStorage.getItem('lastName')) {
      this.last = localStorage.getItem('lastName').charAt(0).toUpperCase();
    }
  }

  logOut() {
    this.authService.logout();
  }
}
