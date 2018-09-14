import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../../types/login';
import { AuthenticationService } from './login.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
// export class LoginPageComponent {
//     model: Login = {
//         email: '',
//         password: ''
//     };
//     private loading = false;
//     returnUrl: string;

//     constructor(  private router: Router, private zone: NgZone, private route: ActivatedRoute,  private authenticationService: AuthenticationService) {

//     }

//     login(model) {
//             if (model.email === 'superadmin@credencys.com' && model.password === '123456') {
//                 this.router.navigate(['/dashboard']);
//             }else {
//                 this.router.navigate(['/login']);
//             }



//     }

// }
export class LoginPageComponent {
    model: Login = {
        email: '',
        password: ''
    };
    authenticated: boolean;
    loading = false;
    userRights: any;
    returnUrl: string;
    errMessage: string;
    firstName: string;
    constructor(
        private loginServices: AuthenticationService,
        private router: Router) {
        if (localStorage.getItem('auth')) {
            this.router.navigate(['dashboard']);
        }
    }

    login() {
        this.loginServices.login(this.model).subscribe((token: HttpResponse<any>) => {
            const xToken = token.headers.get('x-access-token');
            const firstName = token.body.result.firstName;
            const lastName = token.body.result.lastName;
            const email = token.body.result.email;
            const userType = token.body.result.userType;
            localStorage.setItem('auth', xToken);
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('email', email);
            localStorage.setItem('userType', userType);
            this.authenticated = true;
            if (token.body.success) {
                this.router.navigate(['dashboard']);
            }

        }, err => {
            this.loading = false;
            this.errMessage = err.error;
            console.log('error');
        });
    }

}
