import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, AfterViewInit, ElementRef } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateGuard } from './gaurds/authenticate.guard';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidepanelComponent } from './component/sidepanel/sidepanel.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { AuthenticationService } from './component/login-page/login.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpService } from './http.service';
import { Pipe, PipeTransform } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { DataTableModule } from 'angular2-datatable';
import { ProfileComponent } from './component/profile/profile.component';
import { ModalModule } from 'ngx-modialog';
import { ProfileService } from './component/profile/profile.service';
import { HeaderService } from './component/header/header.service';
import { CompanyManagementComponent } from './component/hochiki/company-management.component';
import { CompanyService } from './component/hochiki/company.service';
import { AddCompanyComponent } from './component/hochiki/add-company.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxDeleteConfirmModule } from 'ngx-delete-confirm';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
// import { LoaderService } from './loader.service';
import { ProductComponent } from './component/product/product.component';
import { CategoryComponent } from './component/category/category.component';
import { AddProductComponent } from './component/product/add-product.component';
import { ProductService } from './component/product/product.service';
import { CategoryService } from './component/category/category.service';
import { SupressionComponent } from './component/supression/supression.component';
import { VesComponent } from './component/ves/ves.component';
import { VesService } from './component/ves/ves.service';
import { UserService } from './component/user-management/user.service';

import { SupressionService } from './component/supression/supression.service';
import { SupressionEditComponent } from './component/supression/supression-edit.component';
import { FileValueAccessor } from './component/product/file-control-value-accessor';
import { FileValidator } from './component/product/file.validator';
// import {BootstrapGrowlComponent, BootstrapGrowlService} from 'ngx-bootstrap-growl';

import { BootstrapGrowlModule } from './component/supression/bootstrap-growl.module';
import { VesEditComponent } from './component/ves/ves-edit.component';
import { UserManagementComponent } from './component/user-management/user-management.component';
import { AddUserComponent } from './component/user-management/add-user.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { RolesComponent } from './component/roles/roles.component';
import { RoleInfoService } from './component/roles/role-info.service';
import { AddRoleComponent } from './component/roles/add-role/add-role.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { FeedbackDetailComponent } from './component/feedback/feedback-detail/feedback-detail.component';
import { FeedbckService } from './component/feedback/feedbck.service';
import { UserExplorerComponent } from './component/user-explorer/user-explorer.component';
import { ViewUserExplorerComponent } from './component/user-explorer/view-user-explorer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidepanelComponent,
    MainContentComponent,
    DashboardComponent,
    LoginPageComponent,
    ProfileComponent,
    CompanyManagementComponent,
    AddCompanyComponent,
    ProductComponent,
    CategoryComponent,
    AddProductComponent,
    SupressionComponent,
    VesComponent,
    SupressionEditComponent,
    FileValueAccessor,
    FileValidator,
    VesEditComponent,
    UserManagementComponent,
    AddUserComponent,
    ForgotPasswordComponent,
    RolesComponent,
    AddRoleComponent,
    FeedbackComponent,
    FeedbackDetailComponent,
    UserExplorerComponent,
    ViewUserExplorerComponent
  ],
  imports: [
    BrowserModule,
    BootstrapGrowlModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MyDateRangePickerModule,
    Ng2SearchPipeModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    DataTableModule,
    Ng2OrderModule,
    NgxDeleteConfirmModule.forRoot(),
    RouterModule.forRoot(Routes, { useHash: true }),
    // BootstrapGrowlComponent,
    // ToastModule.forRoot(),
    // RouterModule.forRoot(routes, { useHash: true })
  ],



  providers: [AuthenticationService,
    AuthenticateGuard,
    ProfileService,
    HttpService,
    HeaderService,
    CompanyService,
    ProductService,
    // LoaderService,
    CategoryService,
    SupressionService,
    VesService,
    UserService,
    RoleInfoService,
    FeedbckService
    // BootstrapGrowlService
    // {provide: ToastOptions, useClass: AddProductComponent},
  ],

  bootstrap: [AppComponent],
  //   schemas: [
  //     CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class AppModule {

}
