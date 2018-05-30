
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from './gaurds/authenticate.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { ProfileComponent } from './component/profile/profile.component';
import { HeaderComponent } from './component/header/header.component';
import { CompanyManagementComponent } from './component/hochiki/company-management.component';
import { AddCompanyComponent } from './component/hochiki/add-company.component';
import { ProductComponent } from './component/product/product.component';
import { CategoryComponent } from './component/category/category.component';
import { AddProductComponent } from './component/product/add-product.component';
import { SupressionComponent } from './component/supression/supression.component';
import { VesComponent } from './component/ves/ves.component';
import { SupressionEditComponent } from './component/supression/supression-edit.component';
import { VesEditComponent } from './component/ves/ves-edit.component';
import { UserManagementComponent } from './component/user-management/user-management.component';
import { AddUserComponent } from './component/user-management/add-user.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthenticateGuard],
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'product',
    component: ProductComponent,

  },
  {
    path: 'hochiki/:action',
    component: AddCompanyComponent,
    // canActivate: [AuthenticateGuard],
  },
  {
    path: 'hochiki/:action/:id',
    component: AddCompanyComponent,
    // canActivate: [AuthenticateGuard],
  },
  {
    path: 'hochiki',
    component: CompanyManagementComponent,
    // canActivate: [AuthenticateGuard],
  },
  {
    path: 'product/:action',
    component: AddProductComponent,
  },
  {
    path: 'product/:action/:id',
    component: AddProductComponent,
  },

  {
    path: 'supression/:action/:id',
    component: SupressionEditComponent,
    // canActivate: [AuthenticateGuard],
  },
  {
    path: 'supression',
    component: SupressionComponent,

  },
  {
    path: 'ves/:action/:id',
    component: VesEditComponent,
    // canActivate: [AuthenticateGuard],
  },
  {
    path: 'ves',
    component: VesComponent,
  },
  {
    path: 'user/:action',
    component: AddUserComponent,
    // canActivate: [AuthenticateGuard],
  },
  {
    path: 'user/:action/:id',
    component: AddUserComponent,
    // canActivate: [AuthenticateGuard],
  },
  {
    path: 'user',
    component: UserManagementComponent,
    // canActivate: [AuthenticateGuard],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
