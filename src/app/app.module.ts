import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, AfterViewInit, ElementRef } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateGuard } from './gaurds/authenticate.guard';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidepanelComponent } from './component/sidepanel/sidepanel.component';
import { AuthenticationService } from './component/login-page/login.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpService } from './http.service';
import { Pipe, PipeTransform } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';

import { ProfileComponent } from './component/profile/profile.component';
import { ModalModule } from 'ngx-modialog';
import { ProfileService } from './component/profile/profile.service';
import { HeaderService } from './component/header/header.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxDeleteConfirmModule } from 'ngx-delete-confirm';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import * as jquery from 'jquery';
import { DataTableModule } from 'angular-4-data-table';
import { Ng2PaginationModule } from 'ng2-pagination';

import { ProductComponent } from './component/product/product.component';
import { CategoryComponent } from './component/category/category.component';
import { AddProductComponent } from './component/product/add-product.component';
import { ProductService } from './component/product/product.service';
import { CategoryService } from './component/category/category.service';
import { UserService } from './component/user-management/user.service';

import { UserManagementComponent } from './component/user-management/user-management.component';
import { AddUserComponent } from './component/user-management/add-user.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { RolesComponent } from './component/roles/roles.component';
import { RoleInfoService } from './component/roles/role-info.service';
import { AddRoleComponent } from './component/roles/add-role/add-role.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { FeedbackDetailComponent } from './component/feedback/feedback-detail/feedback-detail.component';
import { FeedbckService } from './component/feedback/feedbck.service';
import { OverviewComponent } from './component/overview/overview.component';
import { overviewService } from './component/overview/overview.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidepanelComponent,
    DashboardComponent,
    LoginPageComponent,
    ProfileComponent,
    ProductComponent,
    CategoryComponent,
    AddProductComponent,
    UserManagementComponent,
    AddUserComponent,
    ForgotPasswordComponent,
    RolesComponent,
    AddRoleComponent,
    FeedbackComponent,
    FeedbackDetailComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    Ng2GoogleChartsModule,
    Ng2PaginationModule,
    AppRoutingModule,
    MyDateRangePickerModule,
    Ng2SearchPipeModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    DataTableModule,
    Ng2OrderModule,
    NgxDeleteConfirmModule.forRoot(),
  ],
  providers: [
    AuthenticationService,
    AuthenticateGuard,
    ProfileService,
    HttpService,
    HeaderService,
    ProductService,
    CategoryService,
    UserService,
    RoleInfoService,
    FeedbckService,
    overviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
