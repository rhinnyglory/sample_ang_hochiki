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
import { RolesComponent } from './component/roles/roles.component';
import { AddRoleComponent } from './component/roles/add-role/add-role.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { FeedbackDetailComponent } from './component/feedback/feedback-detail/feedback-detail.component';


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
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'hochiki/:action',
    component: AddCompanyComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'hochiki/:action/:id',
    component: AddCompanyComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'hochiki',
    component: CompanyManagementComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'product/:action',
    component: AddProductComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'product/:action/:id',
    component: AddProductComponent,
    canActivate: [AuthenticateGuard],
  },

  {
    path: 'supression/:action/:id',
    component: SupressionEditComponent,
    canActivate: [AuthenticateGuard],
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
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'user/:action',
    component: AddUserComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'user/:action/:id',
    component: AddUserComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'user',
    component: UserManagementComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'roles',
    component: RolesComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'roles/:action',
    component: AddRoleComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'roles/:action/:id',
    component: AddRoleComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'feedback/:action/:id',
    component: FeedbackDetailComponent,
    canActivate: [AuthenticateGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
