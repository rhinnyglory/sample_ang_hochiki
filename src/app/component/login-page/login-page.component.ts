import { Component, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../../types/login';
import { AuthenticationService } from './login.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    model: Login = {
        email: '',
        password: ''
    };
    private loading = false;
    returnUrl: string;

    constructor(  private router: Router, private zone: NgZone, private route: ActivatedRoute,  private authenticationService: AuthenticationService) {

    }

    login(model) {
            if (model.email === 'superadmin@credencys.com' && model.password === '123456') {
                this.router.navigate(['/dashboard']);
            }else {
                this.router.navigate(['/login']);
            }



    }

}
