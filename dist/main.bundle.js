webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__ = __webpack_require__("./src/app/gaurds/authenticate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_dashboard_dashboard_component__ = __webpack_require__("./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_login_page_login_page_component__ = __webpack_require__("./src/app/component/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_hochiki_company_management_component__ = __webpack_require__("./src/app/component/hochiki/company-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_hochiki_add_company_component__ = __webpack_require__("./src/app/component/hochiki/add-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_product_product_component__ = __webpack_require__("./src/app/component/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_category_category_component__ = __webpack_require__("./src/app/component/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_product_add_product_component__ = __webpack_require__("./src/app/component/product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_supression_supression_component__ = __webpack_require__("./src/app/component/supression/supression.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_ves_ves_component__ = __webpack_require__("./src/app/component/ves/ves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_supression_supression_edit_component__ = __webpack_require__("./src/app/component/supression/supression-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_ves_ves_edit_component__ = __webpack_require__("./src/app/component/ves/ves-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_user_management_user_management_component__ = __webpack_require__("./src/app/component/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_user_management_add_user_component__ = __webpack_require__("./src/app/component/user-management/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/component/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_roles_roles_component__ = __webpack_require__("./src/app/component/roles/roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_roles_add_role_add_role_component__ = __webpack_require__("./src/app/component/roles/add-role/add-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_feedback_feedback_component__ = __webpack_require__("./src/app/component/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_feedback_feedback_detail_feedback_detail_component__ = __webpack_require__("./src/app/component/feedback/feedback-detail/feedback-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__component_login_page_login_page_component__["a" /* LoginPageComponent */],
    },
    {
        path: 'forgotPassword',
        component: __WEBPACK_IMPORTED_MODULE_16__component_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__component_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'category',
        component: __WEBPACK_IMPORTED_MODULE_8__component_category_category_component__["a" /* CategoryComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'product',
        component: __WEBPACK_IMPORTED_MODULE_7__component_product_product_component__["a" /* ProductComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'hochiki/:action',
        component: __WEBPACK_IMPORTED_MODULE_6__component_hochiki_add_company_component__["a" /* AddCompanyComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'hochiki/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__component_hochiki_add_company_component__["a" /* AddCompanyComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'hochiki',
        component: __WEBPACK_IMPORTED_MODULE_5__component_hochiki_company_management_component__["a" /* CompanyManagementComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'product/:action',
        component: __WEBPACK_IMPORTED_MODULE_9__component_product_add_product_component__["a" /* AddProductComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'product/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__component_product_add_product_component__["a" /* AddProductComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'supression/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__component_supression_supression_edit_component__["a" /* SupressionEditComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'supression',
        component: __WEBPACK_IMPORTED_MODULE_10__component_supression_supression_component__["a" /* SupressionComponent */],
    },
    {
        path: 'ves/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_13__component_ves_ves_edit_component__["a" /* VesEditComponent */],
    },
    {
        path: 'ves',
        component: __WEBPACK_IMPORTED_MODULE_11__component_ves_ves_component__["a" /* VesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'user/:action',
        component: __WEBPACK_IMPORTED_MODULE_15__component_user_management_add_user_component__["a" /* AddUserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'user/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_15__component_user_management_add_user_component__["a" /* AddUserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_14__component_user_management_user_management_component__["a" /* UserManagementComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'roles',
        component: __WEBPACK_IMPORTED_MODULE_17__component_roles_roles_component__["a" /* RolesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'roles/:action',
        component: __WEBPACK_IMPORTED_MODULE_18__component_roles_add_role_add_role_component__["a" /* AddRoleComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'roles/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_18__component_roles_add_role_add_role_component__["a" /* AddRoleComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'feedback',
        component: __WEBPACK_IMPORTED_MODULE_19__component_feedback_feedback_component__["a" /* FeedbackComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    },
    {
        path: 'feedback/:action/:id',
        component: __WEBPACK_IMPORTED_MODULE_20__component_feedback_feedback_detail_feedback_detail_component__["a" /* FeedbackDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__gaurds_authenticate_guard__["a" /* AuthenticateGuard */]],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".tootlbar-icon {\n    padding: 0 14px;\n  }\n  \n  .tootlbar-spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n  }\n  \n  /* Absolute Center Spinner */\n  \n  .loading {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n  \n  /* Transparent Overlay */\n  \n  .loading:before {\n    content: '';\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.3);\n  }\n  \n  /* :not(:required) hides these rules from IE9 and below */\n  \n  .loading:not(:required) {\n    /* hide \"loading...\" text */\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  }\n  \n  .loading:not(:required):after {\n    content: '';\n    display: block;\n    font-size: 10px;\n    width: 1em;\n    height: 1em;\n    margin-top: -0.5em;\n    -webkit-animation: spinner 1500ms infinite linear;\n    animation: spinner 1500ms infinite linear;\n    border-radius: 0.5em;\n    -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n    box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n  }\n  \n  /* Animation */\n  \n  @-webkit-keyframes spinner {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  \n  @keyframes spinner {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\"  class=\"wrap\">\n  <app-header *ngIf=\"showDashboard\"></app-header>\n  <app-sidepanel *ngIf=\"showDashboard\"></app-sidepanel>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    // showLoader: boolean;
    function AppComponent(element, router) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.showDashboard = true;
        this.router.events.subscribe(function (event) {
            if (_this.router.url === '/login') {
                _this.showDashboard = false;
            }
            else {
                _this.showDashboard = true;
            }
        });
        this.haha = this.element.nativeElement;
        this.haha.style.height = '100%';
        this.windHeight = (window.screen.height) + 'px';
        setTimeout(function () {
            var currentUrl = window.location.href;
        }, 100);
        router.events.subscribe(function (val) {
            setTimeout(function () {
                // Remove overflow from .wrapper if layout-boxed exists
                $('.layout-boxed > .wrapper').css('overflow', 'hidden');
                // Get window height and the wrapper height
                var footer_height = $('.main-footer').outerHeight() || 0;
                var neg = $('.main-header').outerHeight() + footer_height;
                var window_height = $(window).height();
                var sidebar_height = $('.sidebar').height() || 0;
                // Set the min-height of the content and sidebar based on the
                // the height of the document.
                if ($('body').hasClass('fixed')) {
                    $('.content-wrapper, .right-side').css('min-height', window_height - footer_height);
                }
                else {
                    var postSetWidth = void 0;
                    if (window_height >= sidebar_height) {
                        $('.content-wrapper, .right-side').css('min-height', window_height - neg);
                        postSetWidth = window_height - neg;
                    }
                    else {
                        $('.content-wrapper, .right-side').css('min-height', sidebar_height);
                        postSetWidth = sidebar_height;
                    }
                    // Fix for the control sidebar height
                    var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
                    if (typeof controlSidebar !== 'undefined') {
                        if (controlSidebar.height() > postSetWidth) {
                            $('.content-wrapper, .right-side').css('min-height', controlSidebar.height());
                        }
                    }
                }
            }, 10);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    var _a, _b;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppComponent.prototype, "authentication", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");

var Constant = {
    url: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].url
};
//# sourceMappingURL=app.constant.js.map

/***/ }),

/***/ "./src/app/app.constantAPI.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantApi; });
var ConstantApi = {
    user: 'user',
    login: 'login',
    userRole: 'get/userRole',
    country: 'get-country',
    state: 'get-state/',
    city: 'get-city/',
    addUser: 'register-user',
    users: 'users-list',
    status: 'users/',
    userUpdate: 'update-profile',
    roles: 'roles-list',
    roleDropdown: 'roles-dropdown',
    addroles: 'roles',
    userProfile: 'get-profile',
    feedsList: 'feedback-list',
    feeDetail: 'feedback-details/'
};
//# sourceMappingURL=app.constantAPI.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gaurds_authenticate_guard__ = __webpack_require__("./src/app/gaurds/authenticate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_header_header_component__ = __webpack_require__("./src/app/component/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_footer_footer_component__ = __webpack_require__("./src/app/component/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_sidepanel_sidepanel_component__ = __webpack_require__("./src/app/component/sidepanel/sidepanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_main_content_main_content_component__ = __webpack_require__("./src/app/component/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_login_page_login_service__ = __webpack_require__("./src/app/component/login-page/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_dashboard_dashboard_component__ = __webpack_require__("./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_mydaterangepicker__ = __webpack_require__("./node_modules/mydaterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_login_page_login_page_component__ = __webpack_require__("./src/app/component/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_mydatepicker__ = __webpack_require__("./node_modules/mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_datatable__ = __webpack_require__("./node_modules/angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_profile_profile_component__ = __webpack_require__("./src/app/component/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_profile_profile_service__ = __webpack_require__("./src/app/component/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_header_header_service__ = __webpack_require__("./src/app/component/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_hochiki_company_management_component__ = __webpack_require__("./src/app/component/hochiki/company-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_hochiki_company_service__ = __webpack_require__("./src/app/component/hochiki/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__component_hochiki_add_company_component__ = __webpack_require__("./src/app/component/hochiki/add-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_order_pipe__ = __webpack_require__("./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_delete_confirm__ = __webpack_require__("./node_modules/ngx-delete-confirm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_product_product_component__ = __webpack_require__("./src/app/component/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_category_category_component__ = __webpack_require__("./src/app/component/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__component_product_add_product_component__ = __webpack_require__("./src/app/component/product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__component_product_product_service__ = __webpack_require__("./src/app/component/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__component_category_category_service__ = __webpack_require__("./src/app/component/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__component_supression_supression_component__ = __webpack_require__("./src/app/component/supression/supression.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__component_ves_ves_component__ = __webpack_require__("./src/app/component/ves/ves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__component_ves_ves_service__ = __webpack_require__("./src/app/component/ves/ves.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__component_user_management_user_service__ = __webpack_require__("./src/app/component/user-management/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__component_supression_supression_service__ = __webpack_require__("./src/app/component/supression/supression.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__component_supression_supression_edit_component__ = __webpack_require__("./src/app/component/supression/supression-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__component_product_file_control_value_accessor__ = __webpack_require__("./src/app/component/product/file-control-value-accessor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__component_product_file_validator__ = __webpack_require__("./src/app/component/product/file.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__component_supression_bootstrap_growl_module__ = __webpack_require__("./src/app/component/supression/bootstrap-growl.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__component_ves_ves_edit_component__ = __webpack_require__("./src/app/component/ves/ves-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__component_user_management_user_management_component__ = __webpack_require__("./src/app/component/user-management/user-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__component_user_management_add_user_component__ = __webpack_require__("./src/app/component/user-management/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__component_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/component/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__component_roles_roles_component__ = __webpack_require__("./src/app/component/roles/roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__component_roles_role_info_service__ = __webpack_require__("./src/app/component/roles/role-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__component_roles_add_role_add_role_component__ = __webpack_require__("./src/app/component/roles/add-role/add-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__component_feedback_feedback_component__ = __webpack_require__("./src/app/component/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__component_feedback_feedback_detail_feedback_detail_component__ = __webpack_require__("./src/app/component/feedback/feedback-detail/feedback-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__component_feedback_feedbck_service__ = __webpack_require__("./src/app/component/feedback/feedbck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { FormsModule } from '@angular/forms';
























// import { LoaderService } from './loader.service';













// import {BootstrapGrowlComponent, BootstrapGrowlService} from 'ngx-bootstrap-growl';











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_sidepanel_sidepanel_component__["a" /* SidepanelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_main_content_main_content_component__["a" /* MainContentComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_23__component_hochiki_company_management_component__["a" /* CompanyManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_25__component_hochiki_add_company_component__["a" /* AddCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_28__component_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_30__component_product_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_33__component_supression_supression_component__["a" /* SupressionComponent */],
                __WEBPACK_IMPORTED_MODULE_34__component_ves_ves_component__["a" /* VesComponent */],
                __WEBPACK_IMPORTED_MODULE_38__component_supression_supression_edit_component__["a" /* SupressionEditComponent */],
                __WEBPACK_IMPORTED_MODULE_39__component_product_file_control_value_accessor__["a" /* FileValueAccessor */],
                __WEBPACK_IMPORTED_MODULE_40__component_product_file_validator__["a" /* FileValidator */],
                __WEBPACK_IMPORTED_MODULE_42__component_ves_ves_edit_component__["a" /* VesEditComponent */],
                __WEBPACK_IMPORTED_MODULE_43__component_user_management_user_management_component__["a" /* UserManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_44__component_user_management_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_45__component_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_46__component_roles_roles_component__["a" /* RolesComponent */],
                __WEBPACK_IMPORTED_MODULE_48__component_roles_add_role_add_role_component__["a" /* AddRoleComponent */],
                __WEBPACK_IMPORTED_MODULE_49__component_feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_50__component_feedback_feedback_detail_feedback_detail_component__["a" /* FeedbackDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_41__component_supression_bootstrap_growl_module__["a" /* BootstrapGrowlModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14_mydaterangepicker__["MyDateRangePickerModule"],
                __WEBPACK_IMPORTED_MODULE_16_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_18_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_26_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_27_ngx_delete_confirm__["a" /* NgxDeleteConfirmModule */].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__component_login_page_login_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_7__gaurds_authenticate_guard__["a" /* AuthenticateGuard */],
                __WEBPACK_IMPORTED_MODULE_21__component_profile_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_17__http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_22__component_header_header_service__["a" /* HeaderService */],
                __WEBPACK_IMPORTED_MODULE_24__component_hochiki_company_service__["a" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_31__component_product_product_service__["a" /* ProductService */],
                // LoaderService,
                __WEBPACK_IMPORTED_MODULE_32__component_category_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_37__component_supression_supression_service__["a" /* SupressionService */],
                __WEBPACK_IMPORTED_MODULE_35__component_ves_ves_service__["a" /* VesService */],
                __WEBPACK_IMPORTED_MODULE_36__component_user_management_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_47__component_roles_role_info_service__["a" /* RoleInfoService */],
                __WEBPACK_IMPORTED_MODULE_51__component_feedback_feedbck_service__["a" /* FeedbckService */]
                // BootstrapGrowlService
                // {provide: ToastOptions, useClass: AddProductComponent},
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/component/category/category.component.css":
/***/ (function(module, exports) {

module.exports = ".imgsize{\n    height: 43px;\n}"

/***/ }),

/***/ "./src/app/component/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Small boxes (Stat box) -->\n  <section class=\"content-header\">\n      <h1>Category</h1>\n  </section>\n\n  <section class=\"content\">\n      <div class=\"box\">\n          <table class=\"table table-bordered\">\n              <tr>\n                  <th class=\"text-center\" (click)=\"sort('id')\">ID<span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n                  <th class=\"text-center\">Category Image</th>\n                  <th (click)=\"sort('name')\">Category Name<span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n                  <th class=\"text-center\">Status</th>\n              </tr>\n              <tr *ngFor=\"let x of category |orderBy: key : reverse | filter:filter; let i = index\">\n                  <td class=\"text-center\">\n                  {{x.id}}\n                  </td>\n                  <td class=\"text-center\"><img src=\"{{x.image}}\" class=\"imgsize\" ></td>\n                  \n                  <td>{{x.name}}</td>\n                  <td class=\"text-center\"> <div *ngIf=\"x.isActive === true\">Active</div>\n                      <div *ngIf=\"x.isActive === false\">Inactive</div></td>\n                  <!-- <td class=\"text-center\">\n                      <a class=\"btn btn-sm btn-info\" [routerLink]=\"['edit', x.id]\" >Edit</a>\n                      <a (click)=\"delUser(x.id)\" class=\"btn btn-sm btn-danger\" >Delete</a>\n                  </td> -->\n              </tr>\n          </table>\n          <div class=\"view-side-form\">\n              <p></p>\n             \n          </div>\n      </div>\n      <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n      position: absolute;top: 50%;left: 50%;\"></div>\n  </section>\n  <!-- /.row (main row) -->\n</div>\n"

/***/ }),

/***/ "./src/app/component/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("./src/app/component/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(router, categoryService) {
        this.router = router;
        this.categoryService = categoryService;
        this.response = [];
        this.body = '';
        this.showLoader = false;
        this.category = [];
        this.reverse = false;
    }
    CategoryComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CategoryComponent.prototype.ngOnInit = function () {
        document.title = 'View Category - Hochiki';
        this.showLoader = true;
        this.getCategory();
    };
    CategoryComponent.prototype.getCategory = function () {
        var _this = this;
        this.categoryService.getCategoryList().then(function (response) {
            _this.showLoader = false;
            _this.category = response.result;
        });
    };
    var _a, _b;
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("./src/app/component/category/category.component.html"),
            styles: [__webpack_require__("./src/app/component/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]) === "function" && _b || Object])
    ], CategoryComponent);
    return CategoryComponent;
}());

//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "./src/app/component/category/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(http, httpcaller) {
        this.http = http;
        this.httpcaller = httpcaller;
        this.categoryUrl = 'categories-list';
        this.product = 'products';
    }
    CategoryService.prototype.getCategoryList = function () {
        return this.httpcaller.httpcall(this.categoryUrl, 'get');
    };
    var _a, _b;
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".content-wrapper{\n    height: 100% !important;\n}\n\n.info-box-number{\n    /* margin-top: 18px; */\n    color: gray;\n    padding-bottom: 10px;\n    /* padding-left: 60px; */\n}\n\n.info-box a {\n    display: block;\n    text-align: center;\n    padding: 10px;\n}\n\n.heading{\n    color: black;\n    font-size:150%;\n    font-family:verdana;\n    font-weight: bold;\n    margin-bottom: 7px;\n}\n\n.widthSet{\n    padding-left:0px;\n    /* padding-top: 9px; */\n}\n\nhr {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    border: 0;\n    border-top: 1px solid #eee;\n}\n"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content-wrapper\">\n  \n <!-- Main content -->\n  <section class=\"content-header\">\n    <!-- Small boxes (Stat box) -->\n   \n    <h1>\n      Dashboard\n \n  </h1>\n \n  </section>\n  <section class=\"content\">\n    <div class=\"row-dashboard\">\n        <div class=\"col-md-3 col-sm-6 col-xs-12\">\n            <div class=\"info-box\">\n              \n  \n              <!-- <div class=\"info-box-content\"> -->\n                  <a routerLink=\"/hochiki\"><img src=\"assets/images/logo1.png\" class=\"widthSet\" ></a><hr>\n                <a routerLink=\"/hochiki\"><span class=\"info-box-number\">{{counthochiki}} products</span></a>\n                \n              <!-- </div> -->\n              <!-- /.info-box-content -->\n            </div>\n            <!-- /.info-box -->\n          </div>\n          <div class=\"col-md-3 col-sm-6 col-xs-12\">\n              <div class=\"info-box\">\n               \n    \n                <!-- <div class=\"info-box-content\"> -->\n                    <a routerLink=\"/supression\"><img src=\"assets/images/logo2.png\" class=\"widthSet\"></a><hr>\n                    <a routerLink=\"/supression\"><span class=\"info-box-number\">{{count}} products</span></a>\n                <!-- </div> -->\n                <!-- /.info-box-content -->\n              </div>\n              <!-- /.info-box -->\n            </div>\n            <div class=\"col-md-3 col-sm-6 col-xs-12\">\n                <div class=\"info-box\">\n      \n                  <!-- <div class=\"info-box-content\"> -->\n                      <a routerLink=\"/ves\"><img src=\"assets/images/logo3.png\" class=\"widthSet\"></a><hr>\n                      <a routerLink=\"/ves\"><span class=\"info-box-number\">{{countves}} products</span></a>\n                  <!-- </div> -->\n                  <!-- /.info-box-content -->\n                </div>\n                <!-- /.info-box -->\n              </div>\n            \n\n       \n\n        <!-- ./col -->\n      </div>\n      <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n      position: absolute;top: 50%;left: 50%;\"></div>\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__supression_supression_component__ = __webpack_require__("./src/app/component/supression/supression.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hochiki_company_management_component__ = __webpack_require__("./src/app/component/hochiki/company-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ves_ves_component__ = __webpack_require__("./src/app/component/ves/ves.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(supressioncomp, hochikicomp, vescomp) {
        this.supressioncomp = supressioncomp;
        this.hochikicomp = hochikicomp;
        this.vescomp = vescomp;
        this.showLoader = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // const counties;
        this.showLoader = true;
        document.title = 'dashboard - Hochiki';
        this.supressioncomp.getCompany().then(function (response) {
            _this.showLoader = false;
            _this.count = response;
        });
        this.hochikicomp.getCompany().then(function (response) {
            _this.showLoader = false;
            _this.counthochiki = response;
        });
        this.vescomp.getCompany().then(function (response) {
            _this.showLoader = false;
            _this.countves = response;
        });
    };
    var _a, _b, _c;
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__supression_supression_component__["a" /* SupressionComponent */], __WEBPACK_IMPORTED_MODULE_2__hochiki_company_management_component__["a" /* CompanyManagementComponent */], __WEBPACK_IMPORTED_MODULE_3__ves_ves_component__["a" /* VesComponent */]],
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/component/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/component/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__supression_supression_component__["a" /* SupressionComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__supression_supression_component__["a" /* SupressionComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__hochiki_company_management_component__["a" /* CompanyManagementComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__hochiki_company_management_component__["a" /* CompanyManagementComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ves_ves_component__["a" /* VesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ves_ves_component__["a" /* VesComponent */]) === "function" && _c || Object])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/component/feedback/feedback-detail/feedback-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".control-label{\n    padding-top: 0px;\n}"

/***/ }),

/***/ "./src/app/component/feedback/feedback-detail/feedback-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n\n    <section class=\"content-header\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h3 style=\"margin-top:0;\">Feedback from <b>{{feedDet.name | uppercase}}</b></h3>\n            </div>\n            <div class=\"col-md-6 text-right\">\n                <a routerLink=\"/feedback\" class=\"btn btn-sm btn-primary\">Close</a>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"content\">\n        <div class=\"box box-primary\">\n\n            <div class=\"box-body\">\n                <form class=\"form-horizontal lables\">\n                    <div class=\"form-group\">\n                        <label for=\"inputName\" class=\"col-sm-2\">Name :</label>\n                        <div class=\"col-sm-6\">\n                            <span class=\"control-label\">{{feedDet.name}}</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputEmail\" class=\"col-sm-2\">Customer Email :</label>\n                        <div class=\"col-sm-6\">\n                            <span class=\"control-label\">{{feedDet.customerEmail}}</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputName\" class=\"col-sm-2\">Customer Name :</label>\n                        <div class=\"col-sm-6\">\n                            <span class=\"control-label\">{{feedDet.customerName}}</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputName\" class=\"col-sm-2\">Type :</label>\n                        <div class=\"col-sm-6\">\n                            <span class=\"control-label\">{{feedDet.type}}</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputName\" class=\"col-sm-2\">Description :</label>\n                        <div class=\"col-sm-6\">\n                            <span class=\"control-label\">{{feedDet.description}}</span>\n                        </div>\n                    </div>\n                    <!-- <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-offset-4 col-sm-6\">\n                        <a routerLink=\"/feedback\" class=\"btn btn-sm btn-primary\">Close</a>\n                    </div>\n                </div>\n            </div> -->\n                </form>\n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/component/feedback/feedback-detail/feedback-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedbck_service__ = __webpack_require__("./src/app/component/feedback/feedbck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackDetailComponent = /** @class */ (function () {
    function FeedbackDetailComponent(route, feed) {
        this.route = route;
        this.feed = feed;
        this.feedDet = {};
    }
    FeedbackDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.route.snapshot.params['id'];
        this.feed.getFeedDetail(userId).then(function (res) {
            _this.feedDet = res.result;
        });
    };
    var _a, _b;
    FeedbackDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feedback-detail',
            template: __webpack_require__("./src/app/component/feedback/feedback-detail/feedback-detail.component.html"),
            styles: [__webpack_require__("./src/app/component/feedback/feedback-detail/feedback-detail.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__feedbck_service__["a" /* FeedbckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__feedbck_service__["a" /* FeedbckService */]) === "function" && _b || Object])
    ], FeedbackDetailComponent);
    return FeedbackDetailComponent;
}());

//# sourceMappingURL=feedback-detail.component.js.map

/***/ }),

/***/ "./src/app/component/feedback/feedback.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Small boxes (Stat box) -->\n    <section class=\"content-header\">\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h3 style=\"margin-top:0;\">Feedback</h3>\n            </div>\n        </div>\n        <h4>Total {{count}} feedbacks.</h4>\n\n\n    </section>\n\n    <section class=\"content\">\n\n        <div class=\"box table-responsive\">\n            <table class=\"table table-bordered\">\n                <tr>\n                    <th style=\"width: 11%\">Id</th>\n                    <th>Name</th>\n                    <th>Customer Email</th>\n                    <th>Customer Name</th>\n                    <th>Created On</th>\n                    <th class=\"text-center\">Action</th>\n                </tr>\n                <tr>\n                    <th style=\"width: 11%\">\n                        <input [(ngModel)]=\"id\" placeholder=\"search id\" class=\"form-control\" (keyup)=\"searchTerm(id)\">\n                    </th>\n                    <th>\n                        <input [(ngModel)]=\"userName\" placeholder=\"search name...\" class=\"form-control\" (keyup)=\"searchTerm(userName)\">\n                    </th>\n                    <th>\n                        <input [(ngModel)]=\"email\" placeholder=\"search customer email...\" class=\"form-control\" (keyup)=\"searchTerm(email)\">\n                    </th>\n                    <th>\n                        <input [(ngModel)]=\"mobile\" placeholder=\"search customer name...\" class=\"form-control\" (keyup)=\"searchTerm(mobile)\">\n                    </th>\n                    <th>\n                        <input [(ngModel)]=\"createdOn\" placeholder=\"search date...\" class=\"form-control\" (keyup)=\"searchTerm(createdOn)\">\n                    </th>\n                    <th></th>\n                </tr>\n\n                <tr *ngFor=\"let x of feedList | filter:filter ; let i = index\">\n                    <td style=\"width: 11%\">{{x.id}}</td>\n                    <td>{{x.name}}</td>\n                    <td>{{x.customerEmail}}</td>\n                    <td>{{x.customerName}}</td>\n                    <td>{{x.createdOn | date: 'medium'}}</td>\n                    <td class=\"action-btn\">\n                        <a title=\"View\" [routerLink]=\"['view', x.id]\" class=\"btn btn-xs btn-info\">\n                            <i class=\"fa fa-eye\"></i>\n                        </a>\n                        <!-- <span>\n                            <delete-confirm title=\"Delete\" [question]=\"'Are you sure you want to delete?'\" (onConfirm)=\"sendDelete($event,x)\" (onCancel)=\"sendCancel($event)\"></delete-confirm>\n                        </span> -->\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n      position: absolute;top: 50%;left: 50%;\"></div>\n    </section>\n    <!-- /.row (main row) -->\n</div>"

/***/ }),

/***/ "./src/app/component/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feedbck_service__ = __webpack_require__("./src/app/component/feedback/feedbck.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(feed) {
        this.feed = feed;
        this.feedList = [];
        this.searchFeed = [];
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.getFeedBacks();
    };
    FeedbackComponent.prototype.getFeedBacks = function () {
        var _this = this;
        this.feed.getFeedbacks().then(function (data) {
            _this.feedList = data.result;
            _this.count = data.count;
            _this.searchFeed = JSON.parse(JSON.stringify(data.result));
        });
    };
    FeedbackComponent.prototype.searchTerm = function (type) {
        this.feedList = this.searchFeed;
        this.feedList = this.feedList.filter(function (response) {
            return (response.name.toLowerCase().indexOf(type.toLowerCase()) !== -1)
                || (response.customerName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
                || (response.customerEmail.toLowerCase().indexOf(type.toLowerCase()) !== -1)
                || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1)
                || (response.createdOn.toLowerCase().indexOf(type.toLowerCase()) !== -1);
        });
    };
    var _a;
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__("./src/app/component/feedback/feedback.component.html"),
            styles: [__webpack_require__("./src/app/component/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__feedbck_service__["a" /* FeedbckService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__feedbck_service__["a" /* FeedbckService */]) === "function" && _a || Object])
    ], FeedbackComponent);
    return FeedbackComponent;
}());

//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ "./src/app/component/feedback/feedbck.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbckService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constantAPI__ = __webpack_require__("./src/app/app.constantAPI.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbckService = /** @class */ (function () {
    function FeedbckService(_http, httpcaller) {
        this._http = _http;
        this.httpcaller = httpcaller;
    }
    FeedbckService.prototype.getFeedbacks = function () {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].feedsList, 'get', {});
    };
    FeedbckService.prototype.getFeedDetail = function (id) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].feeDetail + id, 'get', {});
    };
    var _a, _b;
    FeedbckService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
    ], FeedbckService);
    return FeedbckService;
}());

//# sourceMappingURL=feedbck.service.js.map

/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>Version</b> 2.4.0\n  </div>\n  <strong>Copyright &copy; 2014-2016 <a href=\"https://adminlte.io\">Almsaeed Studio</a>.</strong> All rights\n  reserved.\n</footer>"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/component/forgot-password/forgot-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  forgot-password works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("./src/app/component/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/component/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());

//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ "./src/app/component/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "/* MODAL STYLES\n-------------------------------*/\nmodal .modal {\n    /* modal container fixed across whole screen */\n    position: fixed;\n    display:block;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* z-index must be higher than .modal-background */\n    z-index: 1000;\n     \n    /* enables scrolling for tall modals */\n    overflow: auto;\n  \n}\nmodal .modal .modal-body {\n    padding: 20px;\n    background: #fff;\n    /* margin exposes part of the modal background */\n    margin: 40px;\n}\nmodal {\n    /* modals are hidden by default */\n    display: none;\n  \n   \n}\nmodal .modal-background {\n    /* modal background fixed across whole screen */\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* semi-transparent black  */\n    background-color: #000;\n    opacity: 0.75;\n     \n    /* z-index must be below .modal and above everything else  */\n    z-index: 900;\n}\nbody.modal-open {\n    /* body overflow is hidden to hide main scrollbar when modal window is open */\n    overflow: hidden;\n}\nimg .hochiki{\n    height: 50px;\n    width: 147px;\n}\n.logologo{\n    padding-bottom: 15px;\n}"

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- Logo -->\n  <a class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><img src=\" assets/images/favicon-32x32.png\"></span>\n\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><img src=\"assets/images/logo_dashborad.png\" class=\"logologo\"></span>\n\n  </a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\"> <span class=\"sr-only\">Toggle navigation</span> </a>\n\n\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n\n\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"dist/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\" >Admin</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\">\n              <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n              <p style=\"color:black\">\n                Admin\n\n              </p>\n            </li>\n            <!-- Menu Body -->\n\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n\n              <div class=\"pull-right\">\n                <a href=\"javascript:void(0)\" (click)=\"logOut()\" class=\"btn btn-default btn-flat\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- Control Sidebar Toggle Button -->\n\n      </ul>\n\n    </div>\n  </nav>\n\n\n</header>\n<!-- user's messages -->\n<div class=\"alert alert-success\" id=\"success-alert-user\" style=\" opacity: 0;\ndisplay: block;\nposition: absolute;\nright: 10px;\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Success! </strong> User has been added successfully.\n</div>\n<div class=\"alert alert-success\" id=\"success-alert-user-updated\" style=\" opacity: 0;\ndisplay: block;\nposition: absolute;\nright: 10px;\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Success! </strong> User's detail has been updated.\n</div>\n<div class=\"alert alert-success\" id=\"success-alert-status\" style=\" opacity: 0;\ndisplay: block;\nposition: absolute;\nright: 10px;\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Success! </strong> User's status has been updated.\n</div>\n<div class=\"alert alert-error\" id=\"error-alert-user-delete\" style=\" opacity: 0;\ndisplay: block;\nposition: fixed;\nright: 10px;\n\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Deleted!</strong> User has been deleted.\n</div>\n<div class=\"alert alert-error\" id=\"error-alert-user\" style=\" opacity: 0;\ndisplay: block;\nposition: fixed;\nright: 10px;\n\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Error!</strong> User already exist.\n</div>\n\n<!-- product message -->\n<div class=\"alert alert-success\" id=\"success-alert-prod\" style=\" opacity: 0;\ndisplay: block;\nposition: absolute;\nright: 10px;\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Success! </strong> Product has been added successfully.\n</div>\n<div class=\"alert alert-error\" id=\"error-alert-prod\" style=\" opacity: 0;\ndisplay: block;\nposition: fixed;\nright: 10px;\n\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Error!</strong> Product already exist.\n</div>\n<div class=\"alert alert-success\" id=\"updated-alert\" style=\" opacity: 0;\ndisplay: block;\nposition: absolute;\nright: 10px;\n\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Success!</strong> Product has been updated successfully.\n</div>\n<div class=\"alert alert-error\" id=\"error-alert\" style=\" opacity: 0;\ndisplay: block;\nposition: fixed;\nright: 10px;\n\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Deleted!</strong> Product has been deleted.\n</div>\n\n<!-- role messages -->\n<div class=\"alert alert-success\" id=\"success-alert-role\" style=\" opacity: 0;\ndisplay: block;\nposition: absolute;\nright: 10px;\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Success! </strong> Role has been added successfully.\n</div>\n<div class=\"alert alert-success\" id=\"updated-alert-role\" style=\" opacity: 0;\ndisplay: block;\nposition: absolute;\nright: 10px;\n\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Success!</strong> Role has been updated successfully.\n</div>\n<div class=\"alert alert-error\" id=\"error-alert-role\" style=\" opacity: 0;\ndisplay: block;\nposition: fixed;\nright: 10px;\n\ntop: 10px;\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button>\n  <strong>Deleted!</strong> Role has been deleted.\n</div>"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_page_login_service__ = __webpack_require__("./src/app/component/login-page/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_service__ = __webpack_require__("./src/app/component/header/header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(htpservice, authService, route, router) {
        this.htpservice = htpservice;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logOut = function () {
        this.authService.logout();
    };
    var _a, _b, _c, _d;
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/component/header/header.component.html"),
            styles: [__webpack_require__("./src/app/component/header/header.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__header_header_service__["a" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__header_header_service__["a" /* HeaderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__login_page_login_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_page_login_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/component/header/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderService = /** @class */ (function () {
    function HeaderService(http) {
        this.http = http;
    }
    HeaderService.prototype.getProfile = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('accessToken')
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        // const data =  localStorage.getItem('profileId');
        // console.log(data,"id")
        //   return this.http.get('http://192.168.11.71:3000/user/'+data, options)
        //   .map((response) => {
        //     console.log(response.json(),'find')
        //     return response.json();
        //   });
    };
    var _a;
    HeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], HeaderService);
    return HeaderService;
}());

//# sourceMappingURL=header.service.js.map

/***/ }),

/***/ "./src/app/component/hochiki/add-company.component.css":
/***/ (function(module, exports) {

module.exports = "img{\n    padding-top: 10px;\n    height: 95px;\n    width: 83px;\n};"

/***/ }),

/***/ "./src/app/component/hochiki/add-company.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"content-wrapper\">\n    <!-- Small boxes (Stat box) -->\n    <section class=\"content-header\">\n        <h1> {{this.title}}</h1>\n        <ol class=\"breadcrumb\">\n            <li><a routerLink=\"/hochiki\"><i class=\"fa fa-dashboard\"></i> Hochiki</a></li>\n            <li class=\"active\">Add product</li>\n          </ol>\n      </section>\n\n    <section class=\"content\">\n      \n        <div class=\"box box-primary\">\n            <!-- <div class=\"box-header with-border\">\n              <h3 class=\"box-title\">{{this.title}}</h3>\n            </div> -->\n            <!-- /.box-header -->\n            <!-- form start -->\n            <form role=\"form\" (ngSubmit)=\"saveCompanyDetails()\">\n              <div class=\"box-body\">\n                  <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Product Title<span class=\"astric\">*</span></label>\n                      <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"company.productName\" class=\"form-control\" required pattern=\"[a-zA-Z][a-zA-Z ]+\"\n                      name=\"name\" #name=\"ngModel\" />\n                      <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" placeholder=\"Enter email\" required> -->\n                    </div>\n                   \n                    <div class=\"form-group\">\n                      <label for=\"exampleInputFile\">Product Image<span class=\"astric\">*</span>(Accept only .png,.jpg)</label>\n                      <input type=\"file\" name=\"file\" [(ngModel)]=\"file\" (change)=\"uploadImage($event)\"  accept=\".png,.jpg\" required />\n                      <img *ngIf=\"showpreview\" style=\"padding-bottom:10px;\" src=\"{{images}}\"/>\n                      \n                      <img *ngIf=\"showpreviewafterEdit\" style=\"padding-bottom:10px;\" src=\"{{company.image}}\"/>\n                    \n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputFile\">Document<span class=\"astric\">*</span>(Accept only .pdf,.doc,.docx)</label>\n                      <input type=\"file\" name=\"documentName\"  [(ngModel)]=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\" />\n                      <!-- <embed *ngIf=\"product.documentName\" src=\"{{product.documentName}}\" type=\"application/pdf\" style=\"padding-bottom:10px;\" /> -->\n                      <!-- <iframe  src=\"{{product.documentName}}\"  style=\"padding-bottom:10px;\"></iframe> -->\n                      <!-- <object width=\"400\" height=\"400\" data=\"{{product.documentName}}\"> </object> -->\n                      <a href=\"{{company.documentName}}\" target=\"_blank\">Read Document</a>\n                      \n                    </div>\n                   \n              </div>\n              <!-- /.box-body -->\n\n              <div class=\"box-footer\">\n                  <a  class=\"btn btn-default\" routerLink=\"/hochiki\">Cancel</a>\n                  <!-- <button class=\"btn btn-primary\">{{buttonTitle}}</button> -->\n                <button id=\"myWish\" class=\"btn btn-primary\">{{this.buttonTitle}}</button>\n              </div>\n            </form>\n          </div>\n          <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n          position: absolute;top: 50%;left: 50%;\"></div>\n    </section>\n  \n    <!-- /.row (main row) -->\n</div>\n"

/***/ }),

/***/ "./src/app/component/hochiki/add-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__("./src/app/component/hochiki/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCompanyComponent = /** @class */ (function () {
    function AddCompanyComponent(router, route, companyService) {
        this.router = router;
        this.route = route;
        this.companyService = companyService;
        this.title = 'Add Product';
        this.showLoader = false;
        this.images = {};
        this.showpreview = false;
        this.showpreviewafterEdit = false;
        this.company = {
            productName: '',
            productCode: '',
            image: '',
            categoryId: {},
            documentName: {},
            category: {},
        };
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.title = 'edit Hochiki - Hochiki';
        this.selectName();
        var userId = this.route.snapshot.params['id'];
        if (userId) {
            this.showpreviewafterEdit = true;
            this.title = 'Edit Product';
            this.buttonTitle = 'Update';
            this.companyService.getCompanyDetail(userId).then(function (users) {
                _this.company = users.result;
            });
        }
        else {
            this.buttonTitle = 'Save';
        }
    };
    AddCompanyComponent.prototype.uploadImage = function (file) {
        var _this = this;
        if (file.target.files.length > 0) {
            this.company.image = file.target.files[0];
        }
        if (file.target.files && file.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.images = event.target.result;
                _this.showpreview = true;
                _this.showpreviewafterEdit = false;
            };
            reader.readAsDataURL(file.target.files[0]);
        }
    };
    AddCompanyComponent.prototype.fileChange = function (event) {
        console.log(event);
        var fileList = event.target.files;
        if (fileList.length > 0) {
            console.log('ssss');
            this.company.documentName = event.target.files[0];
        }
    };
    AddCompanyComponent.prototype.selectName = function () {
    };
    AddCompanyComponent.prototype.saveCompanyDetails = function () {
        var _this = this;
        var userId = this.route.snapshot.params['id'];
        this.showLoader = true;
        if (!userId) {
            var info = new FormData();
            info.append('categoryId', '1');
            for (var key in this.company) {
                if (key !== 'file') {
                    info.append(key, this.company[key]);
                }
            }
            this.companyService.createCompany(info).then(function (users) {
                _this.showLoader = false;
                _this.companyService.getCompanyList();
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.alert').css('z-index', '9999');
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#success-alert').fadeTo(2000, 500).slideUp(500, function () {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('#success-alert').slideUp(500);
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.alert').css('z-index', '-1000');
                });
                _this.router.navigate(['/hochiki']);
            });
        }
        else {
            var infoUpdated = new FormData();
            if (typeof this.company.category === 'object') {
                this.company.categoryId = 1;
            }
            for (var keys in this.company) {
                if (keys !== 'file' || 'event') {
                    infoUpdated.append(keys, this.company[keys]);
                }
            }
            this.companyService.updateCompany(userId, infoUpdated).then(function (users) {
                _this.showLoader = false;
                // this.loaderService.display(false);
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.alert').css('z-index', '9999');
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#updated-alert').fadeTo(2000, 500).slideUp(500, function () {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('#updated-alert').slideUp(500);
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.alert').css('z-index', '-1000');
                });
                _this.router.navigate(['/hochiki']);
            });
        }
    };
    var _a, _b, _c;
    AddCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-company',
            template: __webpack_require__("./src/app/component/hochiki/add-company.component.html"),
            styles: [__webpack_require__("./src/app/component/hochiki/add-company.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */]) === "function" && _c || Object])
    ], AddCompanyComponent);
    return AddCompanyComponent;
}());

//# sourceMappingURL=add-company.component.js.map

/***/ }),

/***/ "./src/app/component/hochiki/company-management.component.css":
/***/ (function(module, exports) {

module.exports = ".imgsize{\n    height: 43px;\n}\n.search-container {\n    \n      float: right;\n      padding: 6px 10px;\n      margin-top: 8px;\n      margin-right: 16px;\n      margin-top: -3px;\n      font-size: 17px;\n      border: none;\n      cursor: pointer;\n    }\n.action a,.action span{\n        display:inline-block;\n        margin-left: 10px;\n        \n    }"

/***/ }),

/***/ "./src/app/component/hochiki/company-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Small boxes (Stat box) -->\n    <section class=\"content-header\">\n        <h1>Hochiki</h1>\n        <ol class=\"breadcrumb\">\n                <li>\n                  <a routerLink=\"/dashboard\">\n                    <i class=\"fa fa-dashboard\"></i>Dashboard</a>\n                </li>\n                <li class=\"active\">Hochiki</li>\n              </ol>\n    </section>\n\n    <section class=\"content\">\n        <div class=\"box table-responsive\">\n            <table class=\"table table-bordered\">\n                <tr>\n                    <th (click)=\"sort('i')\" width=\"10%\">ID<span class=\"glyphicon sort-icon\" *ngIf=\"key =='i'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n                    <th>Product Image</th>\n                    <th (click)=\"sort('productName')\">Product Title<span class=\"glyphicon sort-icon\" *ngIf=\"key =='productName'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n                    <th class=\"text-center\">Status</th>\n                    <th>Action</th>\n                </tr>\n                <tr>\n                    <th><input [(ngModel)]=\"id\" placeholder=\"search id\" class=\"form-control\"\n                        (keyup)=\"searchTerm(id)\" width=\"10%\"></th>\n                    <th></th>\n                    <th><input [(ngModel)]=\"productName\" placeholder=\"search product title\" class=\"form-control\"\n                        (keyup)=\"searchTerm(productName)\"></th>\n                    <th></th>\n                    <th></th>\n                </tr>\n                <tr *ngFor=\"let x of company |orderBy: key : reverse | filter:filter; let i = index\">\n                    <td width=\"10%\">\n                    {{x.id}}\n                    </td>\n                    <td><img src=\"{{x.image}}\" class=\"imgsize\" ></td>\n                    \n                    <td>{{x.productName}}</td>\n                    <td class=\"text-center\"> <div *ngIf=\"x.isActive === true\">Active</div>\n                        <div *ngIf=\"x.isActive === false\">Inactive</div></td>\n                        <td class=\"text-center action\" width=\"100\">\n                            <a title=\"Edit\"  [routerLink]=\"['edit', x.id]\" ><i class=\"fa fa-pencil\" style=\"font-size:20px; color:black\"></i></a>\n                            <!-- <a title=\"Delete\" class=\"ml10\" (click)=\"delUser(x.id)\" ><i class=\"fa fa-trash-o\" style=\"font-size:24px; color:black\"></i></a> -->\n                            <span>\n                            <delete-confirm title=\"Delete\"  [question]=\"'Are you sure you want to delete?'\" (onConfirm)=\"sendDelete($event,x.id)\" (onCancel)=\"sendCancel($event)\"></delete-confirm>\n                          </span>\n                        </td>\n                </tr>\n            </table>\n            <div class=\"view-side-form\">\n                <p></p>\n               \n            </div>\n        </div>\n    </section>\n    <!-- /.row (main row) -->\n</div>\n"

/***/ }),

/***/ "./src/app/component/hochiki/company-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__("./src/app/component/hochiki/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyManagementComponent = /** @class */ (function () {
    function CompanyManagementComponent(router, companyService) {
        this.router = router;
        this.companyService = companyService;
        this.response = [];
        this.body = '';
        this.company = [];
        this.storeproduct = [];
        this.reverse = false;
    }
    CompanyManagementComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    CompanyManagementComponent.prototype.ngOnInit = function () {
        document.title = 'View Product - Hochiki';
        this.getCompany();
    };
    CompanyManagementComponent.prototype.getCompany = function () {
        var _this = this;
        return this.companyService.getCompanyList().then(function (response) {
            _this.company = response.result;
            _this.storeproduct = JSON.parse(JSON.stringify(response.result));
            _this.count = response.count;
            var counties = _this.count;
            return counties;
        });
    };
    CompanyManagementComponent.prototype.searchTerm = function (type) {
        this.company = this.storeproduct;
        this.company = this.company.filter(function (response) {
            var searchresult = false;
            console.log(response.category.name, 'hii');
            return (response.productName.toLowerCase().indexOf(type.toLowerCase()) !== -1) || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
        });
    };
    CompanyManagementComponent.prototype.delUser = function (i) {
        var _this = this;
        var index = this.response.indexOf(i);
        var body = { isDelete: true };
        this.companyService.deleteCompany(i, body.isDelete).then(function (response) {
            _this.company.splice(index, 1);
        });
        this.getCompany();
    };
    CompanyManagementComponent.prototype.sendDelete = function ($event, i) {
        var _this = this;
        var index = this.response.indexOf(i);
        var body = { isDelete: true };
        this.companyService.deleteCompany(i, body.isDelete).then(function (response) {
            _this.company.splice(index, 1);
        });
        $('.alert').css('z-index', '9999');
        $('#error-alert').fadeTo(2000, 500).slideUp(500, function () {
            $('#error-alert').slideUp(500);
            $('.alert').css('z-index', '-1000');
        });
        this.getCompany();
    };
    CompanyManagementComponent.prototype.sendCancel = function ($event) {
        // this.getProduct();
    };
    var _a, _b;
    CompanyManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-management',
            template: __webpack_require__("./src/app/component/hochiki/company-management.component.html"),
            styles: [__webpack_require__("./src/app/component/hochiki/company-management.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__company_service__["a" /* CompanyService */]) === "function" && _b || Object])
    ], CompanyManagementComponent);
    return CompanyManagementComponent;
}());

//# sourceMappingURL=company-management.component.js.map

/***/ }),

/***/ "./src/app/component/hochiki/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = /** @class */ (function () {
    function CompanyService(http, httpcaller) {
        this.http = http;
        this.httpcaller = httpcaller;
        this.companyUrl = 'products-list';
        // private company = 'company';
        this.productUrl = 'products-list';
        this.company = 'products';
    }
    CompanyService.prototype.getCompanyList = function () {
        return this.httpcaller.httpcall(this.companyUrl, 'post', { categoryId: 1 });
    };
    CompanyService.prototype.createCompany = function (data) {
        console.log(data, 'data');
        return this.httpcaller.httpformdatacall(this.company, 'post', data);
    };
    CompanyService.prototype.deleteCompany = function (id, isDelete) {
        console.log(id, isDelete);
        console.log(id);
        return this.httpcaller.httpcall(this.company + '/' + id, 'delete');
    };
    CompanyService.prototype.getCompanyDetail = function (id) {
        return this.httpcaller.httpcall(this.productUrl + '/' + id, 'get', { categoryId: 1 });
    };
    CompanyService.prototype.updateCompany = function (id, details) {
        return this.httpcaller.httpformdatacall(this.company + '/' + id, 'put', details);
    };
    var _a, _b;
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
    ], CompanyService);
    return CompanyService;
}());

//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ "./src/app/component/login-page/login-page.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto:400);\nbody {\n  background-color:#fff;\n  -webkit-font-smoothing: antialiased;\n  font: normal 14px Roboto,arial,sans-serif;\n  font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;\n  font-weight: 400;\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 100%;\n}\n.login-cont{\n    border: 1px solid #eee\n}\nh4 { \n border:0 solid #fff; \n border-bottom-width:1px;\n padding-bottom:10px;\n text-align: center;\n}\n.form-control {\n    /* border-radius: 10px; */\n}\n.login-footer{\n    padding-left: 20px;\n    color: #444;\n}\n\n"

/***/ }),

/***/ "./src/app/component/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"hold-transition login-page\"> -->\n  \n\n\n      <div class=\"login-box\"*ngIf=\"!forgotpwd\">\n          <div class=\"login-logo\">\n              <img src=\"assets/images/login_logo.png\">\n            </div>\n        <div class=\"login-cont\">\n        <!-- /.login-logo -->\n        <div class=\"login-box-body\">\n          <p class=\"login-box-msg\" ><b>Sign in to start</b></p>\n          <div class=\"has-error\" [hidden]=\"!errMessage\">{{errMessage}}</div>\n          <form action=\"\" method=\"\" novalidate>\n            <div class=\"form-group has-feedback\" [ngClass]=\"{'has-error': email.invalid && (email.dirty || email.touched),'has-success': email.valid && (email.dirty || email.touched) }\">\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Email\" required name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\n              pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\">\n              <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"has-error\">\n              <div [hidden]=\"!email.errors.required\">\n                Email is required!\n              </div>\n              <div [hidden]=\"!email.errors.pattern\">\n                Please enter a valid email!\n              </div>\n            </div>\n              <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n            </div>\n            <div class=\"form-group has-feedback\" [ngClass]=\"{'has-error': pwd.invalid && (pwd.dirty || pwd.touched),'has-success': pwd.valid && (pwd.dirty || pwd.touched) }\">\n              <input class=\"form-control\" minlength=\"6\"  type=\"password\" placeholder=\"Password\" id=\"pwd\"  required name=\"pwd\" [(ngModel)]=\"model.password\" #pwd=\"ngModel\" />\n              <div *ngIf=\"pwd.errors && (pwd.dirty || pwd.touched)\" class=\"has-error\">\n                <div [hidden]=\"!pwd.errors.required\">\n                  Password is required!\n                </div>\n                <div [hidden]=\"!pwd.errors.minlength\">\n                  Please enter a valid password!\n                </div>\n              </div>\n              <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n            </div>\n            <div class=\"row\">\n              <!-- <div class=\"col-xs-8\">\n                <div class=\"checkbox icheck\">\n                  <label class=\"\">\n                    <a href=\"javascript:void(0)\" (click)='forgotpwd = !forgotpwd'>I forgot my password</a><br> -->\n                    <!-- <a href=\"javascript:void(0)\" (click)='register = !register'>Register a new membership</a> -->\n                  <!-- </label>\n                </div>\n              </div> -->\n              <!-- /.col -->\n              <div class=\"col-xs-12 text-center\">\n                <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click)=\"login(model)\">Sign In</button>\n              </div>\n              <!-- /.col -->\n            </div>\n          </form>\n      \n      </div>\n        <!-- /.login-box-body -->\n      </div>\n      </div>\n\n<!-- Forgot Password HTML ends -->\n<div class=\"login-box\" *ngIf=\"forgotpwd\">\n  <div class=\"login-logo\">\n    <img src=\"assets/images/login_logo.png\">\n  </div>\n  <!-- /.login-logo -->\n  <div class=\"login-box-body\">\n    <p class=\"login-box-msg\">You can reset your password here.</p>\n\n    <form action=\"\" method=\"post\">\n      <div class=\"form-group has-feedback\" [ngClass]=\"{'has-error': email.invalid && (email.dirty || email.touched),'has-success': email.valid && (email.dirty || email.touched) }\">\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Email\" required name=\"email\" [(ngModel)]=\"forgotmail\" #email=\"ngModel\"\n        pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\">\n        <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"has-error\">\n        <div [hidden]=\"!email.errors.required\">\n          Email is required!\n        </div>\n        <div [hidden]=\"!email.errors.pattern\">\n          Please enter a valid email!\n        </div>\n      </div>\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n            <label class=\"\">\n              <!-- <div class=\"icheckbox_square-blue\" aria-checked=\"false\" aria-disabled=\"false\" style=\"position: relative;\"><input type=\"checkbox\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"><ins class=\"iCheck-helper\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"></ins></div> Remember Me -->\n              <a href=\"javascript:void(0)\"(click)='forgotpwd = !forgotpwd'>Back To Login</a><br>\n            </label>\n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xs-4 text-center\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click)=\"sentEmail()\">Send In</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n</div>\n  <!-- /.login-box-body -->\n</div>\n<!-- </div>  -->\n<div class=\"login-box\"*ngIf=\"register\">\n    <div class=\"login-logo\">\n        <img src=\"assets/images/login_logo.png\">\n      </div>\n  <div class=\"login-cont\">\n  <!-- /.login-logo -->\n  <div class=\"login-box-body\">\n    <p class=\"login-box-msg\" ><b>Register</b></p>\n    <div class=\"has-error\" [hidden]=\"!errMessage\">{{errMessage}}</div>\n    <div class=\"register-box-body\">\n      <p class=\"login-box-msg\">Register a new membership</p>\n  \n      <form action=\"../../index.html\" method=\"post\">\n        <div class=\"form-group has-feedback\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n        <div class=\"form-group has-feedback\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n        <div class=\"form-group has-feedback\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n        </div>\n        <div class=\"form-group has-feedback\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Mobile number\">\n          <span class=\"glyphicon glyphicon-phone form-control-feedback\"></span>\n        </div>\n        <div class=\"form-group has-feedback\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"State\">\n          <span class=\"glyphicon glyphicon-home form-control-feedback\"></span>\n        </div>\n        <div class=\"form-group has-feedback\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"City\">\n          <span class=\"glyphicon glyphicon-home form-control-feedback\"></span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-8\">\n            <div class=\"checkbox icheck\">\n              <label class=\"\">\n                <!-- <div class=\"icheckbox_square-blue\" aria-checked=\"false\" aria-disabled=\"false\" style=\"position: relative;\"><input type=\"checkbox\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"><ins class=\"iCheck-helper\" style=\"position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;\"></ins></div> Remember Me -->\n                <a href=\"javascript:void(0)\"(click)='register = !register'>Already I have account</a><br>\n              </label>\n            </div>\n          </div>\n          <!-- /.col -->\n          <div class=\"col-xs-4 text-center\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click)=\"login()\">Send In</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>\n    </div>\n</div>\n  <!-- /.login-box-body -->\n</div>\n</div>"

/***/ }),

/***/ "./src/app/component/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("./src/app/component/login-page/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(loginServices, router) {
        this.loginServices = loginServices;
        this.router = router;
        this.model = {
            email: '',
            password: ''
        };
        this.loading = false;
        if (localStorage.getItem('auth')) {
            this.router.navigate(['dashboard']);
        }
    }
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        this.loginServices.login(this.model).subscribe(function (token) {
            var xToken = token.headers.get('x-access-token');
            localStorage.setItem('auth', xToken);
            _this.authenticated = true;
            if (token.body.success) {
                _this.router.navigate(['dashboard']);
            }
        }, function (err) {
            _this.loading = false;
            console.log('error');
        });
    };
    var _a, _b;
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__("./src/app/component/login-page/login-page.component.html"),
            styles: [__webpack_require__("./src/app/component/login-page/login-page.component.css")]
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
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
}());

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "./src/app/component/login-page/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router, httpcaller) {
        this.http = http;
        this.router = router;
        this.httpcaller = httpcaller;
        this.tokenUrl = __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* Constant */].url + 'admin-login';
        this.forget = 'forget-password';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/x-www-form-urlencoded');
    }
    AuthenticationService.prototype.login = function (login) {
        var data = __assign({}, login);
        return this.http.post(this.tokenUrl, $.param(data), { headers: this.headers, observe: 'response' });
    };
    AuthenticationService.prototype.createPassword = function (data) {
        return this.httpcaller.httpformdatacall(this.forget, 'post', data);
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('auth');
        this.router.navigate(['/login']);
    };
    var _a, _b, _c;
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _c || Object])
    ], AuthenticationService);
    return AuthenticationService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "./src/app/component/main-content/main-content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Dashboard\n      <small>Control panel</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- <base href=\"\"> -->\n    <router-outlet></router-outlet>   \n  </section>\n  <!-- /.content -->\n</div>\n<!-- /.content-wrapper -->"

/***/ }),

/***/ "./src/app/component/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__("./src/app/component/main-content/main-content.component.html"),
            styles: [__webpack_require__("./src/app/component/main-content/main-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());

//# sourceMappingURL=main-content.component.js.map

/***/ }),

/***/ "./src/app/component/product/add-product.component.css":
/***/ (function(module, exports) {

module.exports = "img{\n    padding-top: 10px;\n    height: 95px;\n    width: 83px;\n};\n.astric{\n    color: red;\n}\n.error {\n    color: red;\n}\n.success {\n    color: green;\n} "

/***/ }),

/***/ "./src/app/component/product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Small boxes (Stat box) -->\n  <section class=\"content-header\">\n    <h1>{{ this.title}}</h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/product\">Product</a></li>\n      <li class=\"active\">{{ this.title}}</li>\n    </ol>\n  </section>\n\n  <section class=\"content\">\n\n    <div class=\"box box-primary\">\n      <!-- /.box-header -->\n      <!-- form start -->\n\n      <form #userForm=\"ngForm\" (ngSubmit)=\"saveCompanyDetails(userForm)\">\n        <div class=\"box-body\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Product Title<span class=\"astric\">*</span></label>\n            <input type=\"text\" id=\"name\" name=\"productName\" [(ngModel)]=\"product.productName\" class=\"form-control\" name=\"name\" #productName=\"ngModel\"\n              required/>\n            <div *ngIf=\"productName.errors?.required && userForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              Product Title required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Category<span class=\"astric\">*</span></label>\n            <select class=\"form-control\" name=\"selectedTechs\" [(ngModel)]=\"product.category.id\" id=\"name\" (change)=\"selectName();\" required\n              #id=\"ngModel\">\n                        <option value=\"\">Select Category</option>\n                        <option *ngFor=\"let role of categories\" [value]=\"role.id\" [selected]=\"product.category.id == role.id\">{{role.name}}\n        \n                        </option>\n                      </select>\n            <div *ngIf=\"id.errors?.required && userForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              Category required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputFile\">Product Image<span class=\"astric\">*</span>(Accept only .png,.jpg)</label>\n            <input type=\"file\" name=\"image\" [(ngModel)]=\"file\" (change)=\"uploadImage($event)\" accept=\".png,.jpg\" id=\"name\" />\n\n            <img *ngIf=\"showpreview\" style=\"padding-bottom:10px;\" src=\"{{images}}\" />\n\n\n            <img *ngIf=\"showpreviewafterEdit\" style=\"padding-bottom:10px;\" src=\"{{product.image}}\" />\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Video Url<span class=\"astric\">*</span></label>\n            <!-- <input type=\"text\" id=\"videoUrl\" name=\"videoUrl\" [(ngModel)]=\"product.videoUrl\" class=\"form-control\" name=\"videoUrl\" #videoUrl=\"ngModel\"\n              pattern=\"^((https?|ftp)://)?([a-z]+[.])?[a  -z0-9-]+([.][a-z]{1,4}){1,2}(/.*)?$\" required/> -->\n            <input class=\"form-control\" type=\"text\" name=\"video\" #videoUrl='ngModel' pattern=\"^((https?|ftp)://)?([a-z]+[.])?[a-z0-9-]+([.][a-z]{1,4}){1,2}(/.*)?$\"\n              [(ngModel)]=\"product.videoUrl\">\n            <!-- <div *ngIf=\"videoUrl.errors?.required && userForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              Video Url required.\n            </div> -->\n            <div *ngIf=\"videoUrl.errors?.pattern && userForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              Please give proper url!\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputFile\">Document<span class=\"astric\">*</span>(Accept only .pdf,.doc,.docx)</label>\n            <input type=\"file\" name=\"documentName\" [(ngModel)]=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\"\n              id=\"name\" />\n\n            <a href=\"{{product.documentName}}\" target=\"_blank\">Read Document</a>\n\n          </div>\n\n        </div>\n        <!-- /.box-body -->\n\n        <div class=\"box-footer\">\n          <a class=\"btn btn-default\" routerLink=\"/product\">Cancel</a>\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!product.productName||!product.category.id||!product.image||!product.documentName\">{{this.buttonTitle}}</button>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n        position: absolute;top: 50%;left: 50%;\"></div>\n  </section>\n  <!-- /.row (main row) -->\n</div>"

/***/ }),

/***/ "./src/app/component/product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("./src/app/component/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(router, route, productService, formBuilder) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.isValidFormSubmitted = null;
        this.form = {};
        this.submitted = false;
        this.nameempty = false;
        this.images = {};
        this.showpreview = false;
        this.showpreviewafterEdit = false;
        this.documentName = false;
        this.showLoader = false;
        this.title = 'Add Product';
        this.animate = 'flyRight'; // you can override any options available
        this.newestOnTop = false;
        this.showCloseButton = true;
        this.pdf = '';
        this.thumbnail = '';
        this.categories = [];
        this.product = {
            categoryId: {},
            documentName: {},
            category: {},
        };
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.title = 'Add Product - Hochiki';
        this.product.documentName = false;
        var userId = this.route.snapshot.params['id'];
        if (userId) {
            this.showpreviewafterEdit = true;
            this.title = 'Edit Product';
            this.buttonTitle = 'Update';
            this.productService.getProductDetail(userId).then(function (users) {
                _this.product = users.result;
            });
        }
        else {
            this.buttonTitle = 'Save';
        }
        this.onOptionsSelected();
        this.selectName();
    };
    AddProductComponent.prototype.uploadImage = function (file) {
        var _this = this;
        if (file.target.files.length > 0) {
            this.product.image = file.target.files[0];
        }
        if (file.target.files && file.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.images = event.target.result;
                _this.showpreview = true;
                _this.showpreviewafterEdit = false;
            };
            reader.readAsDataURL(file.target.files[0]);
        }
    };
    AddProductComponent.prototype.fileChange = function (event) {
        this.product.documentName = true;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.product.documentName = event.target.files[0];
        }
    };
    AddProductComponent.prototype.onOptionsSelected = function () {
        var _this = this;
        return this.productService.getCategoryList().then(function (response) {
            _this.categories = response.result;
        });
    };
    AddProductComponent.prototype.selectName = function () {
    };
    AddProductComponent.prototype.saveCompanyDetails = function (form) {
        var _this = this;
        this.isValidFormSubmitted = false;
        if (form.invalid) {
            return;
        }
        this.isValidFormSubmitted = true;
        // this.loaderService.display(true);
        this.showLoader = true;
        var userId = this.route.snapshot.params['id'];
        var info = new FormData();
        if (!userId) {
            if (typeof this.product.category === 'object') {
                this.product.categoryId = this.product.category.id;
            }
            for (var key in this.product) {
                if (key !== 'file' || 'event') {
                    info.append(key, this.product[key]);
                }
            }
            this.productService.createProduct(info).then(function (users) {
                // this.loaderService.display(false);
                _this.showLoader = false;
                _this.productService.getProductList();
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '9999');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#success-alert-prod').fadeTo(2000, 500).slideUp(500, function () {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#success-alert-prod').slideUp(500);
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '-1000');
                });
                _this.router.navigate(['/product']);
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '9999');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#error-alert-prod').fadeTo(2000, 500).slideUp(500, function () {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#error-alert-prod').slideUp(500);
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '-1000');
                });
            });
        }
        else {
            if (typeof this.product.category === 'object') {
                this.product.categoryId = this.product.category.id;
            }
            for (var keys in this.product) {
                if (keys !== 'file' || 'event') {
                    info.append(keys, this.product[keys]);
                }
            }
            this.productService.updateProduct(userId, info).then(function (users) {
                _this.showLoader = false;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '9999');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#updated-alert').fadeTo(2000, 500).slideUp(500, function () {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#updated-alert').slideUp(500);
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '-1000');
                });
                _this.router.navigate(['/product']);
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '9999');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#error-alert-prod').fadeTo(2000, 500).slideUp(500, function () {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#error-alert-prod').slideUp(500);
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '-1000');
                });
            });
        }
    };
    var _a, _b, _c, _d;
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__("./src/app/component/product/add-product.component.html"),
            styles: [__webpack_require__("./src/app/component/product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
    ], AddProductComponent);
    return AddProductComponent;
}());

//# sourceMappingURL=add-product.component.js.map

/***/ }),

/***/ "./src/app/component/product/file-control-value-accessor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileValueAccessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FileValueAccessor = /** @class */ (function () {
    function FileValueAccessor() {
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    FileValueAccessor_1 = FileValueAccessor;
    FileValueAccessor.prototype.writeValue = function (value) { };
    FileValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    FileValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    var FileValueAccessor_1;
    FileValueAccessor = FileValueAccessor_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'input[type=file]',
            host: {
                '(change)': 'onChange($event.target.files)',
                '(blur)': 'onTouched()'
            },
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */], useExisting: FileValueAccessor_1, multi: true }
            ]
        })
    ], FileValueAccessor);
    return FileValueAccessor;
}());

//# sourceMappingURL=file-control-value-accessor.js.map

/***/ }),

/***/ "./src/app/component/product/file.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FileValidator = /** @class */ (function () {
    function FileValidator() {
    }
    FileValidator_1 = FileValidator;
    FileValidator.validate = function (c) {
        return c.value == null || c.value.length === 0 ? { 'required': true } : null;
    };
    FileValidator.prototype.validate = function (c) {
        return FileValidator_1.validate(c);
    };
    var FileValidator_1;
    FileValidator = FileValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[requireFile]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: FileValidator_1, multi: true },
            ]
        })
    ], FileValidator);
    return FileValidator;
}());

//# sourceMappingURL=file.validator.js.map

/***/ }),

/***/ "./src/app/component/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ".imgsize{\n    height: 43px;\n}\n.search-container {\n    \n      float: right;\n      padding: 6px 10px;\n      margin-top: 8px;\n      margin-right: 16px;\n      margin-top: -3px;\n      font-size: 17px;\n      border: none;\n      cursor: pointer;\n    }\n.action a,.action span{\n    display:inline-block;\n    margin-left: 10px;\n    \n}\n/* .btn btn-primary-pl{\n} */\n"

/***/ }),

/***/ "./src/app/component/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Small boxes (Stat box) -->\n    <section class=\"content-header\">\n     \n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h3 style=\"margin-top:0;\">Product Management</h3>\n            </div>\n            <div class=\"col-md-6\">\n                <a [routerLink]=\"['add']\" class=\"btn btn-primary\" style=\"float:right;\">Add Product</a>\n            </div>\n        </div>\n        <h4>Total {{count}} products are available.</h4>\n\n\n    </section>\n\n    <section class=\"content\">\n\n        <div class=\"box table-responsive\">\n            <table class=\"table table-bordered\">\n                <tr>\n                    <th (click)=\"sort('id')\" width=\"11%\">ID</th>\n                    <th width=\"8%\">Product Image</th>\n                    <th>Product Title</th>\n                    <th>Category</th>\n                    <th class=\"text-center\">Status</th>\n                    <th>Action</th>\n                </tr>\n                <tr>\n                    <th width=\"11%\">\n                        <input [(ngModel)]=\"id\" placeholder=\"search id\" class=\"form-control\" (keyup)=\"searchTerm(id)\">\n                    </th>\n                    <th width=\"8%\"></th>\n                    <th>\n                        <input [(ngModel)]=\"productName\" placeholder=\"search product title...\" class=\"form-control\" (keyup)=\"searchTerm(productName)\">\n                    </th>\n                    <th>\n                        <input [(ngModel)]=\"categoryName\" placeholder=\"search category...\" class=\"form-control\" (keyup)=\"searchTerm(categoryName)\">\n                    </th>\n                    <th></th>\n                    <th></th>\n                </tr>\n\n                <tr *ngFor=\"let x of product | filter:filter ; let i = index\">\n                    <td width=\"11%\">\n                        {{x.id}}\n                    </td>\n                    <td width=\"8%\">\n                        <img src=\"{{x.image}}\" class=\"imgsize\">\n                    </td>\n\n                    <td>{{x.productName}}</td>\n                    <td>{{x.category.name}}</td>\n                    <td class=\"text-center\">\n                        <div *ngIf=\"x.isActive === true\">Active</div>\n                        <div *ngIf=\"x.isActive === false\">Inactive</div>\n                    </td>\n                    <td class=\"action-btn\">\n                        <a title=\"Edit\" [routerLink]=\"['edit', x.id]\" class=\"btn btn-xs btn-primary\">\n                            <i class=\"fa fa-pencil\"></i>\n                        </a>\n                        <!-- <a title=\"Delete\" class=\"ml10\" (click)=\"delUser(x.id)\" ><i class=\"fa fa-trash-o\" style=\"font-size:24px; color:black\"></i></a> -->\n                        <span class=\"btn btn-xs btn-danger\">\n                            <delete-confirm title=\"Delete\" [question]=\"'Are you sure you want to delete?'\" (onConfirm)=\"sendDelete($event,x.id)\" (onCancel)=\"sendCancel($event)\"></delete-confirm>\n                        </span>\n                    </td>\n                </tr>\n\n            </table>\n        </div>\n        <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n        position: absolute;top: 50%;left: 50%;\"></div>\n    </section>\n    <!-- /.row (main row) -->\n</div>"

/***/ }),

/***/ "./src/app/component/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("./src/app/component/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ToastsManager } from 'ng2-toastr/ng2-toastr';



var ProductComponent = /** @class */ (function () {
    // key: string;
    // reverse = false;
    // sort(key) {
    //   this.key = key;
    //   this.reverse = !this.reverse;
    // }
    function ProductComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.response = [];
        this.body = '';
        this.name = '';
        this.count = {};
        this.p = 1;
        this.showLoader = false;
        this.product = [];
        this.storeproduct = [];
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    ProductComponent.prototype.ngOnInit = function () {
        document.title = 'View Product - Hochiki';
        this.showLoader = true;
        this.getProduct();
    };
    ProductComponent.prototype.getProduct = function () {
        var _this = this;
        return this.productService.getProductList().then(function (response) {
            _this.showLoader = false;
            _this.product = response.result;
            _this.count = response.count;
            _this.storeproduct = JSON.parse(JSON.stringify(response.result));
        });
    };
    ProductComponent.prototype.delUser = function (i) {
    };
    ProductComponent.prototype.searchTerm = function (type) {
        this.product = this.storeproduct;
        this.product = this.product.filter(function (response) {
            return (response.category.name.toLowerCase().indexOf(type.toLowerCase()) !== -1)
                || (response.productName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
                || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
        });
    };
    ProductComponent.prototype.sendDelete = function ($event, i) {
        var _this = this;
        var index = this.response.indexOf(i);
        var body = { isDelete: true };
        this.productService.deleteProduct(i, body.isDelete).then(function (response) {
            _this.product.splice(index, 1);
            console.log(i, 'index');
        });
        $('.alert').css('z-index', '9999');
        $('#error-alert').fadeTo(2000, 500).slideUp(500, function () {
            $('#error-alert').slideUp(500);
            $('.alert').css('z-index', '-1000');
        });
        this.getProduct();
    };
    ProductComponent.prototype.sendCancel = function ($event) {
    };
    var _a, _b;
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/component/product/product.component.html"),
            styles: [__webpack_require__("./src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _b || Object])
    ], ProductComponent);
    return ProductComponent;
}());

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "./src/app/component/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(route, http, httpcaller) {
        this.route = route;
        this.http = http;
        this.httpcaller = httpcaller;
        this.productUrl = 'products-list';
        this.product = 'products';
        this.categoryDropdown = 'category-dropdown';
    }
    ProductService.prototype.getProductList = function () {
        return this.httpcaller.httpcall(this.productUrl, 'post', {});
    };
    ProductService.prototype.getCategoryList = function () {
        return this.httpcaller.httpcall(this.categoryDropdown, 'get', {});
    };
    ProductService.prototype.createProduct = function (data) {
        return this.httpcaller.httpformdatacall(this.product, 'post', data);
    };
    ProductService.prototype.deleteProduct = function (id, isDelete) {
        return this.httpcaller.httpcall(this.product + '/' + id, 'delete');
    };
    ProductService.prototype.getProductDetail = function (id) {
        return this.httpcaller.httpcall(this.productUrl + '/' + id, 'get', {});
    };
    ProductService.prototype.updateProduct = function (id, details) {
        return this.httpcaller.httpformdatacall(this.product + '/' + id, 'put', details);
    };
    ProductService.prototype.getproductSearch = function (categoryName) {
        return this.httpcaller.httpcall(this.productUrl, 'post', { categoryName: '' });
    };
    var _a, _b, _c;
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _c || Object])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "./src/app/component/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidepanel></app-sidepanel>\n<div class=\"content-wrapper\">\n  <!-- Main content -->\n  <section class=\"content\">\n      <div>          \n          <div class=\"form-container\" [hidden]=\"isEdit == true\">\n            <form>\n              <div class=\"form-group\">\n                <label for=\"name\">Name:</label>\n                <label class=\"control-label\">{{model.name}}</label>\n                <div class=\"form-group\">\n                  <label for=\"name\">Email:</label>\n                  <label class=\"control-label\">{{model.email}}</label>\n                  <div class=\"form-group\">\n                    <label for=\"name\">Age:</label>\n                    <label class=\"control-label\">{{model.age}}</label>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"name\">Gender:{{isEdit}}</label>\n                    <label class=\"control-label\">{{model.gender}}</label>\n                  </div>\n        \n        \n                  <div class=\"form-group\">\n                    <!-- <a routerLink=\"/dashboard\" routerLinkActive=\"active\"  class=\"btn btn-primary\">cancel</a> -->\n                    <button class=\"btn btn-primary\" (click)=\"moveToSecond()\">Cancel</button>\n                    \n                    <!-- <button (click)=\"goBack()\">Back</button> -->\n                    <a href=\"javascript:void(0)\" class=\"btn btn-primary\" (click)=\"isEdit = !isEdit\">Edit</a>\n                  <!-- </div>\n            </form>\n            </div>\n            </div> -->\n            \n                    </div>\n                    </div>\n              </div>\n                </form>\n            </div>\n            <div class=\"form-container\" *ngIf=\"isEdit\">\n                <form (ngSubmit)=\"save()\">\n                  <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" class=\"form-control\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"name\">Email</label>\n                    <input type=\"text\" name=\"email\" [(ngModel)]=\"model.email\" class=\"form-control\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"name\">Age</label>\n                    <input type=\"text\" name=\"age\" [(ngModel)]=\"model.age\" class=\"form-control\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"name\">Gender</label>\n                    <input type=\"radio\" [(ngModel)]=\"model.gender\" name=\"gender\" value=\"M\">Male\n                    <br>\n                    <input type=\"radio\" [(ngModel)]=\"model.gender\" name=\"gender\" value=\"F\">Female\n                  </div>\n            \n            \n                  <div class=\"form-group\">\n                      <button class=\"btn btn-primary\" (click)=\"moveToSecond()\">Cancel</button>\n                    <!-- <a class=\"btn btn-default\" routerLink=\"/profile\" routerLinkActive=\"active\">Cancel</a> -->\n                    <button class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n                  </div>\n                </form>\n              </div>\n        </div>\n\n \n        \n        \n      </section>\n\n    </div>\n\n    <app-footer></app-footer>  \n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/component/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_service__ = __webpack_require__("./src/app/component/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(htpservice, router) {
        this.htpservice = htpservice;
        this.router = router;
        this.isEdit = false;
    }
    ProfileComponent.prototype.save = function (id) {
        var _this = this;
        delete this.model.password;
        delete this.model.profilepic;
        delete this.model.updatedAt;
        delete this.model.userRole;
        this.htpservice.userService(this.model).subscribe(function (res) {
            console.log(res);
            _this.model = res.result;
        });
        this.router.navigate(['/dashboard']);
    };
    ProfileComponent.prototype.moveToSecond = function () {
        this.router.navigate(['/dashboard']);
    };
    // save(): void {
    //   this.productService.update(this.product)
    //     .then(() => this.goBack());
    // }
    // editBotton(id: string): void{
    //   this.isEdit = true;
    // }
    ProfileComponent.prototype.ngOnInit = function () {
        // this.modelshow = false;
        var _this = this;
        this.htpservice.getProducts().subscribe(function (res) {
            console.log(res);
            // this.model=res;
            _this.model = res.result;
            // this.modelshow = true;
        });
    };
    var _a, _b;
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/component/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/component/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/component/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getProducts = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('accessToken')
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        var data = localStorage.getItem('profileId');
        console.log(data, "id");
        return this.http.get('http://192.168.11.71:3000/user/' + data, options)
            .map(function (response) {
            console.log(response.json(), 'find');
            return response.json();
            //return  userDetails;
        });
    };
    ProfileService.prototype.userService = function (update) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('accessToken')
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        var data = localStorage.getItem('profileId');
        return this.http.put('http://192.168.11.71:3000/user/' + data, update, options)
            .map(function (response) {
            console.log(response.json(), 'hey');
            return response.json();
            //return  userDetails;
        });
    };
    var _a;
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ProfileService);
    return ProfileService;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "./src/app/component/roles/add-role/add-role.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/roles/add-role/add-role.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Small boxes (Stat box) -->\n  <section class=\"content-header\">\n    <h1>{{ this.title}}</h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/roles\">Role Management</a></li>\n      <li class=\"active\">{{this.title}}</li>\n    </ol>\n  </section>\n\n  <section class=\"content\">\n\n    <div class=\"box box-primary\">\n      <!-- /.box-header -->\n      <!-- form start -->\n\n      <form #roleForm=\"ngForm\" (ngSubmit)=\"addRole(roleForm)\">\n        <div class=\"box-body\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Role Name<span class=\"astric\">*</span></label>\n            <input type=\"text\" id=\"name\" name=\"rolefirstName\" [(ngModel)]=\"role.name\" class=\"form-control\" name=\"name\" #name=\"ngModel\"\n              required/>\n            <div *ngIf=\"name.errors?.required && roleForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              Role Name is required.\n            </div>\n          </div>\n        </div>\n        <!-- /.box-body -->\n\n        <div class=\"box-footer\">\n          <a class=\"btn btn-default\" routerLink=\"/roles\">Cancel</a>\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!role.name\">{{this.buttonTitle}}</button>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n        position: absolute;top: 50%;left: 50%;\"></div>\n  </section>\n  <!-- /.row (main row) -->\n</div>"

/***/ }),

/***/ "./src/app/component/roles/add-role/add-role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__role_info_service__ = __webpack_require__("./src/app/component/roles/role-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddRoleComponent = /** @class */ (function () {
    function AddRoleComponent(router, route, roleServe) {
        this.router = router;
        this.route = route;
        this.roleServe = roleServe;
        this.role = {};
        this.showLoader = false;
        this.isValidFormSubmitted = null;
    }
    AddRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.route.snapshot.params['id'];
        if (this.userId) {
            // this.showpreviewafterEdit = true;
            this.title = 'Edit Product';
            this.buttonTitle = 'Update';
            this.roleServe.getRoleDetail(this.userId).then(function (res) {
                _this.role = res.result;
            });
        }
        else {
            this.buttonTitle = 'Save';
        }
    };
    AddRoleComponent.prototype.addRole = function (form) {
        var _this = this;
        this.isValidFormSubmitted = false;
        this.isValidFormSubmitted = true;
        this.showLoader = true;
        if (this.userId) {
            this.roleServe.updateRole(this.role, this.userId).then(function (res) {
                // this.loaderService.display(false);
                if (res.success = true) {
                    _this.showLoader = false;
                    $('.alert').css('z-index', '9999');
                    $('#updated-alert-role').fadeTo(2000, 500).slideUp(500, function () {
                        $('#updated-alert-role').slideUp(500);
                        $('.alert').css('z-index', '-1000');
                    });
                    _this.router.navigate(['/roles']);
                }
                else {
                }
            });
        }
        else {
            this.roleServe.addRole(this.role).then(function (res) {
                // this.loaderService.display(false);
                if (res.success = true) {
                    _this.showLoader = false;
                    $('.alert').css('z-index', '9999');
                    $('#success-alert-role').fadeTo(2000, 500).slideUp(500, function () {
                        $('#success-alert-role').slideUp(500);
                        $('.alert').css('z-index', '-1000');
                    });
                    _this.router.navigate(['/roles']);
                }
                else {
                }
            });
        }
    };
    var _a, _b, _c;
    AddRoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-role',
            template: __webpack_require__("./src/app/component/roles/add-role/add-role.component.html"),
            styles: [__webpack_require__("./src/app/component/roles/add-role/add-role.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__role_info_service__["a" /* RoleInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__role_info_service__["a" /* RoleInfoService */]) === "function" && _c || Object])
    ], AddRoleComponent);
    return AddRoleComponent;
}());

//# sourceMappingURL=add-role.component.js.map

/***/ }),

/***/ "./src/app/component/roles/role-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constantAPI__ = __webpack_require__("./src/app/app.constantAPI.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoleInfoService = /** @class */ (function () {
    function RoleInfoService(_http, httpcaller) {
        this._http = _http;
        this.httpcaller = httpcaller;
    }
    RoleInfoService.prototype.addRole = function (role) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].addroles, 'post', role);
    };
    RoleInfoService.prototype.getRoles = function () {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].roles, 'get', {});
    };
    RoleInfoService.prototype.getRoleDetail = function (id) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].roles + '/' + id, 'get', {});
    };
    RoleInfoService.prototype.updateRole = function (role, id) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].addroles + '/' + id, 'put', role);
    };
    RoleInfoService.prototype.deleteRole = function (id, isDelete) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].addroles + '/' + id, 'post', { 'isDelete': isDelete });
    };
    var _a, _b;
    RoleInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
    ], RoleInfoService);
    return RoleInfoService;
}());

//# sourceMappingURL=role-info.service.js.map

/***/ }),

/***/ "./src/app/component/roles/roles.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/roles/roles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Small boxes (Stat box) -->\n  <section class=\"content-header\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h3 style=\"margin-top:0;\">Role Management</h3>\n      </div>\n      <div class=\"col-md-6\">\n        <a [routerLink]=\"['add']\" class=\"btn btn-primary\" style=\"float:right;\">Add Role</a>\n      </div>\n    </div>\n    <h4>Total {{count}} roles are available.</h4>\n\n\n  </section>\n\n  <section class=\"content\">\n\n    <div class=\"box table-responsive\">\n      <table class=\"table table-bordered\">\n        <tr>\n          <th (click)=\"sort('id')\" width=\"11%\">ID</th>\n          <th>Name</th>\n          <th class=\"text-center\">Action</th>\n        </tr>\n        <tr>\n          <th width=\"11%\">\n            <input [(ngModel)]=\"id\" placeholder=\"search id\" class=\"form-control\" (keyup)=\"searchTerm(id)\">\n          </th>\n          <th>\n            <input [(ngModel)]=\"userName\" placeholder=\"search name...\" class=\"form-control\" (keyup)=\"searchTerm(userName)\">\n          </th>\n          <th></th>\n        </tr>\n\n        <tr *ngFor=\"let x of rolesList | filter:filter ; let i = index\">\n          <td width=\"11%\">\n            {{x.id}}\n          </td>\n          <td>{{x.name}}</td>\n          <td class=\"action-btn\">\n            <a title=\"Edit\" [routerLink]=\"['edit', x.id]\" class=\"btn btn-xs btn-primary\">\n                  <i class=\"fa fa-pencil\"></i>\n              </a>\n            <!-- <a title=\"Delete\" class=\"ml10\" (click)=\"delUser(x.id)\" ><i class=\"fa fa-trash-o\" style=\"font-size:24px; color:black\"></i></a> -->\n            <span class=\"btn btn-xs btn-danger\">\n                  <delete-confirm title=\"Delete\" [question]=\"'Are you sure you want to delete?'\" (onConfirm)=\"sendDelete($event,x)\" (onCancel)=\"sendCancel($event)\"></delete-confirm>\n              </span>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n    position: absolute;top: 50%;left: 50%;\"></div>\n  </section>\n  <!-- /.row (main row) -->\n</div>"

/***/ }),

/***/ "./src/app/component/roles/roles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__role_info_service__ = __webpack_require__("./src/app/component/roles/role-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RolesComponent = /** @class */ (function () {
    function RolesComponent(role) {
        this.role = role;
        this.rolesList = [];
        this.showLoader = false;
        this.searchUser = [];
        this.reverse = false;
        this.count = {};
    }
    RolesComponent.prototype.ngOnInit = function () {
        this.getUsersList();
    };
    RolesComponent.prototype.getUsersList = function () {
        var _this = this;
        this.showLoader = true;
        this.role.getRoles().then(function (data) {
            _this.rolesList = data.result;
            _this.showLoader = false;
            _this.count = data.count;
            _this.searchUser = JSON.parse(JSON.stringify(data.result));
        }).catch(function (err) {
            console.log(err, '123');
            _this.showLoader = false;
        });
    };
    RolesComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    RolesComponent.prototype.sendDelete = function ($event, i) {
        var _this = this;
        var index = this.rolesList.indexOf(i);
        var body = { isDelete: true };
        this.role.deleteRole(i.id, body.isDelete).then(function (response) {
            _this.rolesList.splice(index, 1);
        });
        $('.alert').css('z-index', '9999');
        $('#error-alert-role').fadeTo(2000, 500).slideUp(500, function () {
            $('#error-alert-role').slideUp(500);
            $('.alert').css('z-index', '-1000');
        });
    };
    RolesComponent.prototype.sendCancel = function ($event) {
    };
    RolesComponent.prototype.searchTerm = function (type) {
        this.rolesList = this.searchUser;
        this.rolesList = this.rolesList.filter(function (response) {
            return (response.name.toLowerCase().indexOf(type.toLowerCase()) !== -1)
                || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
        });
    };
    var _a;
    RolesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__("./src/app/component/roles/roles.component.html"),
            styles: [__webpack_require__("./src/app/component/roles/roles.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__role_info_service__["a" /* RoleInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__role_info_service__["a" /* RoleInfoService */]) === "function" && _a || Object])
    ], RolesComponent);
    return RolesComponent;
}());

//# sourceMappingURL=roles.component.js.map

/***/ }),

/***/ "./src/app/component/sidepanel/sidepanel.component.css":
/***/ (function(module, exports) {

module.exports = ".skin-blue .sidebar-menu > li> a{\n    color: #ffffff;\n    background: black;\n}\n.skin-blue .sidebar a:hover {\n    text-decoration: none;\n    color: #1baed6;\n}\n.skin-blue .sidebar-menu > li > a, .skin-blue .sidebar-menu > li.active > a, .skin-blue .sidebar-menu > li.menu-open > a {\n    color: #ffffff;\n    background: #1e282c;\n}\n.adminstyle {\n    margin: 11px 0 10px;\n    color: black;\n}\n.pl10{\n    padding-left: 10px;\n}\n.fa{\n    color: black;\n}\n\n"

/***/ }),

/***/ "./src/app/component/sidepanel/sidepanel.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\n<aside class=\"main-sidebar\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <!-- Sidebar user panel -->\n    <!-- /.search form -->\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\n      <li [routerLinkActive]=\"['active']\" class=\"treeview\">\n        <a routerLink=\"/dashboard\"> <i class=\"fa fa-dashboard\"></i><span class=\"pl10\">Dashboard</span></a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" class=\"treeview\">\n        <a routerLink=\"/category\"><i class=\"fa fa-database\"></i>\n          <span class=\"pl10\">Category</span>\n        </a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" class=\"treeview\">\n        <a routerLink=\"/product\"> <i class=\"fa fa-archive\"></i><span class=\"pl10\">Product Management</span></a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" class=\"treeview\">\n        <a routerLink=\"/user\"> <i class=\"fa fa-user\"></i><span class=\"pl10\">User Management</span></a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" class=\"treeview\">\n        <a routerLink=\"/roles\"> <i class=\"fa fa-cubes\"></i><span class=\"pl10\"> Role Management</span></a>\n      </li>\n      <li [routerLinkActive]=\"['active']\" class=\"treeview\">\n          <a routerLink=\"/feedback\"> <i class=\"fa fa-comments\"></i><span class=\"pl10\"> Feedback</span></a>\n        </li>\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>"

/***/ }),

/***/ "./src/app/component/sidepanel/sidepanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidepanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidepanelComponent = /** @class */ (function () {
    function SidepanelComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SidepanelComponent.prototype.ngOnInit = function () {
    };
    var _a, _b;
    SidepanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidepanel',
            template: __webpack_require__("./src/app/component/sidepanel/sidepanel.component.html"),
            styles: [__webpack_require__("./src/app/component/sidepanel/sidepanel.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], SidepanelComponent);
    return SidepanelComponent;
}());

//# sourceMappingURL=sidepanel.component.js.map

/***/ }),

/***/ "./src/app/component/supression/bootstrap-growl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapGrowlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_service__ = __webpack_require__("./src/app/component/supression/bootstrap-growl.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BootstrapGrowlComponent = /** @class */ (function () {
    function BootstrapGrowlComponent(growlService) {
        this.growlService = growlService;
    }
    BootstrapGrowlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.growlService.configure(this.alertCount, this.autoClose);
        this.growlService.alerts.subscribe(function (alerts) {
            _this.alerts = alerts;
        });
    };
    BootstrapGrowlComponent.prototype.closeAlert = function (alert) {
        // service is automatically notified!
        if (alert.dismissable) {
            this.growlService.removeAlert(alert);
        }
    };
    var _a;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BootstrapGrowlComponent.prototype, "alertCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BootstrapGrowlComponent.prototype, "autoClose", void 0);
    BootstrapGrowlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bootstrap-growl',
            template: "<div *ngFor=\"let alert of alerts\">\n        <div class=\"alert alert-{{alert.type}}\" [ngClass]=\"{'alert-dismissible': alert.dismissable}\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAlert(alert)\" *ngIf=\"alert.dismissable\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <span [innerHtml]=\"alert.message\"></span>\n        </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_service__["a" /* BootstrapGrowlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_service__["a" /* BootstrapGrowlService */]) === "function" && _a || Object])
    ], BootstrapGrowlComponent);
    return BootstrapGrowlComponent;
}());

//# sourceMappingURL=bootstrap-growl.component.js.map

/***/ }),

/***/ "./src/app/component/supression/bootstrap-growl.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapGrowlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_component__ = __webpack_require__("./src/app/component/supression/bootstrap-growl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootstrap_growl_service__ = __webpack_require__("./src/app/component/supression/bootstrap-growl.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BootstrapGrowlModule = /** @class */ (function () {
    function BootstrapGrowlModule() {
    }
    BootstrapGrowlModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_component__["a" /* BootstrapGrowlComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__bootstrap_growl_service__["a" /* BootstrapGrowlService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__bootstrap_growl_component__["a" /* BootstrapGrowlComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], BootstrapGrowlModule);
    return BootstrapGrowlModule;
}());

//# sourceMappingURL=bootstrap-growl.module.js.map

/***/ }),

/***/ "./src/app/component/supression/bootstrap-growl.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapGrowlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_product__ = __webpack_require__("./src/app/types/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BootstrapGrowlService = /** @class */ (function () {
    function BootstrapGrowlService() {
        this.alerts = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.alertHolder = new Array();
        this.alertCount = 999;
        this.autoClose = -1;
    }
    BootstrapGrowlService.prototype.configure = function (alertCount, autoClose) {
        if (typeof alertCount !== "undefined" && alertCount !== null) {
            if (!isNaN(alertCount) && alertCount > 0) {
                this.alertCount = alertCount;
            }
            else {
                console.error("parameter alertCount must be a valid number > 0, to leave default, do not provide this parameter");
            }
        }
        if (typeof autoClose !== "undefined" && autoClose !== null) {
            if (!isNaN(autoClose) && autoClose > 0) {
                this.autoClose = autoClose;
            }
            else {
                console.error("parameter autoClose must be a valid number > 0, to leave default, do not provide this parameter");
            }
        }
    };
    BootstrapGrowlService.prototype.addAlert = function (message, type, autoClose, dismissable) {
        if (this.alertHolder.length >= this.alertCount) {
            // remove the oldest alert
            this._removeAlertById(0, this.alertHolder, this.alerts);
        }
        if (typeof dismissable === "undefined" || dismissable === null) {
            dismissable = true;
        }
        var cssType = this._convertTypeToCssClass(type);
        var alert = { message: message, type: cssType, dismissable: dismissable };
        this.alertHolder.push(alert);
        this.alerts.next(this.alertHolder);
        if (autoClose && autoClose > -1) {
            this._scheduleAlertHide(autoClose, alert);
        }
        else if (this.autoClose > -1) {
            this._scheduleAlertHide(this.autoClose, alert);
        }
    };
    BootstrapGrowlService.prototype.removeAlert = function (alert) {
        this._removeAlert(alert, this.alertHolder, this.alerts);
    };
    BootstrapGrowlService.prototype._removeAlert = function (alert, alertHolder, alerts) {
        var index = alertHolder.indexOf(alert);
        this._removeAlertById(index, alertHolder, alerts);
    };
    BootstrapGrowlService.prototype._scheduleAlertHide = function (timeout, alert) {
        var _this = this;
        var displayTimeout = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].timer(timeout);
        displayTimeout.subscribe(function () {
            _this._removeAlert(alert, _this.alertHolder, _this.alerts);
        });
    };
    BootstrapGrowlService.prototype._convertTypeToCssClass = function (type) {
        if (type === __WEBPACK_IMPORTED_MODULE_1__types_product__["a" /* BootstrapAlertType */].SUCCESS) {
            return "success";
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_1__types_product__["a" /* BootstrapAlertType */].INFO) {
            return "info";
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_1__types_product__["a" /* BootstrapAlertType */].WARNING) {
            return "warning";
        }
        else if (type === __WEBPACK_IMPORTED_MODULE_1__types_product__["a" /* BootstrapAlertType */].DANGER) {
            return "danger";
        }
    };
    BootstrapGrowlService.prototype._removeAlertById = function (id, alertHolder, alerts) {
        alertHolder.splice(id, 1);
        alerts.next(alertHolder);
    };
    BootstrapGrowlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BootstrapGrowlService);
    return BootstrapGrowlService;
}());

//# sourceMappingURL=bootstrap-growl.service.js.map

/***/ }),

/***/ "./src/app/component/supression/supression-edit.component.css":
/***/ (function(module, exports) {

module.exports = "img{\n    padding-top: 10px;\n    height: 95px;\n    width: 83px;\n};"

/***/ }),

/***/ "./src/app/component/supression/supression-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<style>\n  bootstrap-growl{\n  position:absolute;\n  right:8px;\n  top:8px;\n  z-index:10;\n}\n</style>\n<div class=\"content-wrapper\">\n  <!-- Small boxes (Stat box) -->\n  <section class=\"content-header\">\n      <h1>Edit Product</h1>\n      <ol class=\"breadcrumb\">\n          <li><a routerLink=\"/supression\"><i class=\"fa fa-dashboard\"></i> Hochiki Suppression</a></li>\n          <li class=\"active\">Edit Product</li>\n        </ol>\n    </section>\n\n  <section class=\"content\">\n    \n      <div class=\"box box-primary\">\n          <!-- <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">{{this.title}}</h3>\n          </div> -->\n          <!-- /.box-header -->\n          <!-- form start -->\n          <form role=\"form\" (ngSubmit)=\"saveCompanyDetails()\">\n            <div class=\"box-body\">\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Product Title<span class=\"astric\">*</span></label>\n                    <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"company.productName\" class=\"form-control\" required pattern=\"[a-zA-Z][a-zA-Z ]+\"\n                    name=\"name\" #name=\"ngModel\" />\n                    <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" placeholder=\"Enter email\" required> -->\n                  </div>\n                 \n                  <div class=\"form-group\">\n                    <label for=\"exampleInputFile\">Product Image<span class=\"astric\">*</span>(Accept only .png,.jpg)</label>\n                    <input type=\"file\" name=\"file\" [(ngModel)]=\"file\" (change)=\"uploadImage($event)\"  accept=\".png,.jpg\" required />\n                    <img *ngIf=\"showpreview\" style=\"padding-bottom:10px;\" src=\"{{images}}\"/>\n                    \n                    <img *ngIf=\"showpreviewafterEdit\" style=\"padding-bottom:10px;\" src=\"{{company.image}}\"/>\n                  \n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputFile\">Document<span class=\"astric\">*</span>(Accept only .pdf,.doc,.docx)</label>\n                    <input type=\"file\" name=\"documentName\"  [(ngModel)]=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\" />\n\n                    <a href=\"{{company.documentName}}\" target=\"_blank\">Read Document</a>\n                    \n                  </div>\n                 \n            </div>\n            <!-- /.box-body -->\n\n            <div class=\"box-footer\">\n                <a class=\"btn btn-default\" routerLink=\"/supression\">Cancel</a>\n                <!-- <button class=\"btn btn-primary\">{{buttonTitle}}</button> -->\n              <button class=\"btn btn-primary\">{{this.buttonTitle}}</button>\n            </div>\n          </form>\n        </div>\n        <!-- <div class=\"alert alert-success\">\n          <strong>Success!</strong> Updated successfully\n        </div> -->\n  </section>\n  <!-- /.row (main row) -->\n</div>\n"

/***/ }),

/***/ "./src/app/component/supression/supression-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupressionEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__supression_service__ = __webpack_require__("./src/app/component/supression/supression.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootstrap_growl_service__ = __webpack_require__("./src/app/component/supression/bootstrap-growl.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupressionEditComponent = /** @class */ (function () {
    function SupressionEditComponent(router, route, supressionService, bootstrapGrowlService) {
        this.router = router;
        this.route = route;
        this.supressionService = supressionService;
        this.bootstrapGrowlService = bootstrapGrowlService;
        this.title = 'Add Company';
        this.images = {};
        this.showpreview = false;
        this.showpreviewafterEdit = false;
        this.company = {
            productName: '',
            productCode: '',
            image: '',
            categoryId: {},
            documentName: {},
            category: {},
        };
    }
    SupressionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.title = 'edit Supression - Hochiki';
        this.selectName();
        var userId = this.route.snapshot.params['id'];
        if (userId) {
            this.showpreviewafterEdit = true;
            this.title = 'Edit Product';
            this.buttonTitle = 'Update';
            this.supressionService.getCompanyDetail(userId).then(function (users) {
                _this.company = users.result;
            });
        }
        else {
            this.buttonTitle = 'save';
        }
    };
    SupressionEditComponent.prototype.uploadImage = function (file) {
        var _this = this;
        if (file.target.files.length > 0) {
            this.company.image = file.target.files[0];
        }
        if (file.target.files && file.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.images = event.target.result;
                _this.showpreview = true;
                _this.showpreviewafterEdit = false;
            };
            reader.readAsDataURL(file.target.files[0]);
        }
    };
    SupressionEditComponent.prototype.fileChange = function (event) {
        console.log(event);
        var fileList = event.target.files;
        if (fileList.length > 0) {
            console.log('ssss');
            this.company.documentName = event.target.files[0];
        }
    };
    SupressionEditComponent.prototype.selectName = function () {
    };
    SupressionEditComponent.prototype.saveCompanyDetails = function () {
        var _this = this;
        var userId = this.route.snapshot.params['id'];
        var infoUpdated = new FormData();
        if (typeof this.company.category === 'object') {
            this.company.categoryId = 2;
        }
        for (var keys in this.company) {
            if (keys !== 'file' || 'event') {
                infoUpdated.append(keys, this.company[keys]);
            }
        }
        this.supressionService.updateCompany(userId, infoUpdated).then(function (users) {
            $('.alert').css('z-index', '9999');
            $('#updated-alert').fadeTo(2000, 500).slideUp(500, function () {
                $('#updated-alert').slideUp(500);
                $('.alert').css('z-index', '-1000');
            });
            _this.router.navigate(['/supression']);
        });
    };
    var _a, _b, _c, _d;
    SupressionEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-supression-edit',
            template: __webpack_require__("./src/app/component/supression/supression-edit.component.html"),
            styles: [__webpack_require__("./src/app/component/supression/supression-edit.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__supression_service__["a" /* SupressionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__supression_service__["a" /* SupressionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__bootstrap_growl_service__["a" /* BootstrapGrowlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__bootstrap_growl_service__["a" /* BootstrapGrowlService */]) === "function" && _d || Object])
    ], SupressionEditComponent);
    return SupressionEditComponent;
}());

//# sourceMappingURL=supression-edit.component.js.map

/***/ }),

/***/ "./src/app/component/supression/supression.component.css":
/***/ (function(module, exports) {

module.exports = ".imgsize{\n    height: 43px;\n}\n.search-container {\n    \n      float: right;\n      padding: 6px 10px;\n      margin-top: 8px;\n      margin-right: 16px;\n      margin-top: -3px;\n      font-size: 17px;\n      border: none;\n      cursor: pointer;\n    }\n.action a,.action span{\n        display:inline-block;\n        margin-left: 10px;\n        \n    }"

/***/ }),

/***/ "./src/app/component/supression/supression.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Small boxes (Stat box) -->\n    <section class=\"content-header\">\n        <h1>Hochiki-Suppression</h1>\n        <ol class=\"breadcrumb\">\n                <li>\n                  <a routerLink=\"/dashboard\">\n                    <i class=\"fa fa-dashboard\"></i>Dashboard</a>\n                </li>\n                <li class=\"active\">Hochiki-Suppression</li>\n              </ol>\n    </section>\n\n    <section class=\"content\">\n        <div class=\"box table-responsive\">\n           \n            <table class=\"table table-bordered\">\n                <tr>\n                    <th (click)=\"sort('id')\" width=\"10%\">ID<span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n                    <th>Product Image</th>\n                    <th (click)=\"sort('name')\">Product Title<span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n                    <th class=\"text-center\">Status</th>\n                    <th>Action</th>\n                </tr>\n                <tr>\n                    <th><input [(ngModel)]=\"id\" placeholder=\"search id\" class=\"form-control\"\n                        (keyup)=\"searchTerm(id)\" width=\"10%\"></th>\n                    <th></th>\n                    <th><input [(ngModel)]=\"productName\" placeholder=\"search product title\" class=\"form-control\"\n                        (keyup)=\"searchTerm(productName)\"></th>\n                    <th></th>\n                    <th></th>\n                </tr>\n                <tr *ngFor=\"let x of company |orderBy: key : reverse | filter:filter; let i = index\">\n                    <td width=\"10%\">\n                    {{x.id}}\n                    </td>\n                    <td><img src=\"{{x.image}}\" class=\"imgsize\" ></td>\n                    \n                    <td>{{x.productName}}</td>\n                    <td class=\"text-center\"> <div *ngIf=\"x.isActive === true\">Active</div>\n                        <div *ngIf=\"x.isActive === false\">Inactive</div></td>\n                    <td class=\"text-center action\" width=\"100\">\n                        <a title=\"Edit\"  [routerLink]=\"['edit', x.id]\" ><i class=\"fa fa-pencil\" style=\"font-size:20px; color:black\"></i></a>\n                        <!-- <a title=\"Delete\" class=\"ml10\" (click)=\"delUser(x.id)\" ><i class=\"fa fa-trash-o\" style=\"font-size:24px; color:black\"></i></a> -->\n                        <span>\n                        <delete-confirm title=\"Delete\"  [question]=\"'Are you sure you want to delete?'\" (onConfirm)=\"sendDelete($event,x.id)\" (onCancel)=\"sendCancel($event)\"></delete-confirm>\n                      </span>\n                    </td>\n                </tr>\n            </table>\n            <div class=\"view-side-form\">\n                <p></p>\n               \n            </div>\n        </div>\n        <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n        position: absolute;top: 50%;left: 50%;\"></div>\n    </section>\n    <!-- /.row (main row) -->\n</div>\n"

/***/ }),

/***/ "./src/app/component/supression/supression.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupressionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__supression_service__ = __webpack_require__("./src/app/component/supression/supression.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupressionComponent = /** @class */ (function () {
    function SupressionComponent(router, supressionService) {
        this.router = router;
        this.supressionService = supressionService;
        this.response = [];
        this.body = '';
        this.showLoader = false;
        this.company = [];
        this.storeproduct = [];
        this.reverse = false;
    }
    SupressionComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    SupressionComponent.prototype.ngOnInit = function () {
        document.title = 'View Product - Supression';
        this.showLoader = true;
        this.getCompany();
        // this.countDetails();
    };
    SupressionComponent.prototype.getCompany = function () {
        var _this = this;
        return this.supressionService.getCompanyList().then(function (response) {
            _this.showLoader = false;
            _this.company = response.result;
            _this.storeproduct = JSON.parse(JSON.stringify(response.result));
            _this.count = response.count;
            var counties = _this.count;
            return counties;
        });
    };
    SupressionComponent.prototype.searchTerm = function (type) {
        this.company = this.storeproduct;
        this.company = this.company.filter(function (response) {
            var searchresult = false;
            console.log(response.category.name, 'hii');
            return (response.productName.toLowerCase().indexOf(type.toLowerCase()) !== -1) || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
        });
    };
    SupressionComponent.prototype.sendDelete = function ($event, i) {
        var _this = this;
        var index = this.response.indexOf(i);
        var body = { isDelete: true };
        this.supressionService.deleteCompany(i, body.isDelete).then(function (response) {
            _this.company.splice(index, 1);
        });
        $('.alert').css('z-index', '9999');
        $('#error-alert').fadeTo(2000, 500).slideUp(500, function () {
            $('#error-alert').slideUp(500);
            $('.alert').css('z-index', '-1000');
        });
        this.getCompany();
    };
    SupressionComponent.prototype.sendCancel = function ($event) {
        // this.getProduct();
    };
    var _a, _b;
    SupressionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-supression',
            template: __webpack_require__("./src/app/component/supression/supression.component.html"),
            styles: [__webpack_require__("./src/app/component/supression/supression.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__supression_service__["a" /* SupressionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__supression_service__["a" /* SupressionService */]) === "function" && _b || Object])
    ], SupressionComponent);
    return SupressionComponent;
}());

//# sourceMappingURL=supression.component.js.map

/***/ }),

/***/ "./src/app/component/supression/supression.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupressionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupressionService = /** @class */ (function () {
    function SupressionService(http, httpcaller) {
        this.http = http;
        this.httpcaller = httpcaller;
        this.companyUrl = 'products-list';
        this.company = 'products';
    }
    SupressionService.prototype.getCompanyList = function () {
        return this.httpcaller.httpcall(this.companyUrl, 'post', { categoryId: 2 });
    };
    SupressionService.prototype.getCompanyDetail = function (id) {
        return this.httpcaller.httpcall(this.companyUrl + '/' + id, 'get', { categoryId: 2 });
    };
    SupressionService.prototype.updateCompany = function (id, details) {
        return this.httpcaller.httpformdatacall(this.company + '/' + id, 'put', details);
    };
    SupressionService.prototype.deleteCompany = function (id, isDelete) {
        return this.httpcaller.httpcall(this.company + '/' + id, 'delete');
    };
    var _a, _b;
    SupressionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
    ], SupressionService);
    return SupressionService;
}());

//# sourceMappingURL=supression.service.js.map

/***/ }),

/***/ "./src/app/component/user-management/add-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/user-management/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Small boxes (Stat box) -->\n  <section class=\"content-header\">\n    <h1>{{ this.title}}</h1>\n    <ol class=\"breadcrumb\">\n      <li><a routerLink=\"/user\">User Management</a></li>\n      <li class=\"active\">{{ this.title}}</li>\n    </ol>\n  </section>\n\n  <section class=\"content\">\n\n    <div class=\"box box-primary\">\n      <!-- /.box-header -->\n      <!-- form start -->\n\n      <form #userForm=\"ngForm\" (ngSubmit)=\"saveUserDetails(userForm, user)\">\n        <div class=\"box-body\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">First name<span class=\"astric\">*</span></label>\n            <input type=\"text\" id=\"name\" name=\"userfirstName\" [(ngModel)]=\"user.firstName\" class=\"form-control\" name=\"firstName\" #firstName=\"ngModel\"\n              required/>\n            <div *ngIf=\"firstName.errors?.required && userForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              First name required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Last name<span class=\"astric\">*</span></label>\n            <input type=\"text\" id=\"lastName\" name=\"userlastName\" [(ngModel)]=\"user.lastName\" class=\"form-control\" name=\"name\" #lastName=\"ngModel\"\n              required/>\n            <div *ngIf=\"lastName.errors?.required && userForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              Last name required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email<span class=\"astric\">*</span></label>\n            <input type=\"email\" class=\"form-control\" [disabled]=\"!editEmail\" id=\"email\" required name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\">\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"has-error\">\n              <div [hidden]=\"!email.errors.required\">\n                Email is required!\n              </div>\n              <div [hidden]=\"!email.errors.pattern\">\n                Please enter a valid email!\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Phone Number<span class=\"astric\">*</span></label>\n\n            <input type=\"text\" (blur)=\"onBlur(user.mobile)\" class=\"form_fields form-control\" id=\"mobilenumber\" required [(ngModel)]=\"user.mobile\"\n              name=\"mobilenumber\" pattern=\"'^[0-9]*$'\" minlength=\"10\" maxlength=\"10\" #mobile=\"ngModel\" (keypress)=\"keyPress($event)\">\n            <div *ngIf=\"showSelected\" class=\"alert alert-danger\">\n              <span [hidden]=\"!showSelected\">Contact number should be 10 digit</span>\n              <div [hidden]=\"!phoneempty\">Contact number is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Role<span class=\"astric\">*</span></label>\n            <select class=\"form-control\" name=\"selectedRoles\" [(ngModel)]=\"user.roleId\" id=\"role\" required #selectedRoles=\"ngModel\">\n                          <option value=\"\">Select Role</option>\n                          <option *ngFor=\"let role of roles\" [disabled]=\"role.name == 'admin'\" [value]=\"role.id\">{{role.name}}</option>\n                        </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Country<span class=\"astric\">*</span></label>\n            <select class=\"form-control\" name=\"countryId\" [(ngModel)]=\"user.countryId\" id=\"country\" (change)=\"getStatesList();\" required\n              #countryId=\"ngModel\">\n                        <option value=\"\">Select Country</option>\n                        <option *ngFor=\"let country of countries\" [value]=\"country.id\">{{country.name}}</option>\n                      </select>\n            <div *ngIf=\"countryId.errors?.required && userForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              Country required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">State<span class=\"astric\">*</span></label>\n            <select class=\"form-control\" name=\"stateId\" [(ngModel)]=\"user.stateId\" id=\"state\" (change)=\"getCitiesList();\" required\n              #stateId=\"ngModel\">\n                        <option value=\"\">Select State</option>\n                        <option *ngFor=\"let state of states\" [value]=\"state.id\">{{state.name}}\n        \n                        </option>\n                      </select>\n            <div *ngIf=\"stateId.errors?.required && userForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              State required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">City<span class=\"astric\">*</span></label>\n            <select class=\"form-control\" name=\"cityId\" [(ngModel)]=\"user.cityId\" id=\"city\" required #cityId=\"ngModel\">\n                        <option value=\"\">Select City</option>\n                        <option *ngFor=\"let role of cities\" [value]=\"role.id\" >{{role.name}}\n        \n                        </option>\n                      </select>\n            <div *ngIf=\"cityId.errors?.required && userForm.submitted && !isValidFormSubmitted\" [ngClass]=\"'error'\">\n              City required.\n            </div>\n          </div>\n\n\n        </div>\n        <!-- /.box-body -->\n\n        <div class=\"box-footer\">\n          <a class=\"btn btn-default\" routerLink=\"/user\">Cancel</a>\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!user.firstName||!user.countryId||!user.stateId||!user.cityId||!user.mobile||!user.lastName\">{{this.buttonTitle}}</button>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n        position: absolute;top: 50%;left: 50%;\"></div>\n  </section>\n  <!-- /.row (main row) -->\n</div>"

/***/ }),

/***/ "./src/app/component/user-management/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/component/user-management/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(router, userService, route, formBuilder) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.isValidFormSubmitted = null;
        this.form = {};
        this.submitted = false;
        this.nameempty = false;
        this.showpreview = false;
        this.showpreviewafterEdit = false;
        this.showLoader = false;
        this.title = 'Add User';
        this.animate = 'flyRight'; // you can override any options available
        this.newestOnTop = false;
        this.showCloseButton = true;
        this.thumbnail = '';
        this.showSelected = false;
        this.phoneempty = false;
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.roles = [];
        this.editEmail = true;
        this.user = {
            country: {},
            state: {},
            city: {},
        };
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.title = 'Add User - Hochiki';
        this.userId = this.route.snapshot.params['id'];
        this.userService.getCountries().then(function (data) {
            _this.countries = data.result;
        });
        this.getRoles();
        if (this.userId) {
            this.editEmail = false;
            this.showpreviewafterEdit = true;
            this.title = 'Edit Product';
            this.buttonTitle = 'Update';
            this.getUserDetails(this.userId);
        }
        else {
            this.editEmail = true;
            this.buttonTitle = 'Save';
        }
    };
    AddUserComponent.prototype.getUserDetails = function (userId) {
        var _this = this;
        this.userService.getUserDetails(this.userId).then(function (res) {
            _this.user = res.result;
            _this.user.countryId = res.result.countryId;
            _this.userService.getStates(res.result.countryId).then(function (res1) {
                _this.states = res1.result;
            });
            _this.userService.getCities(res.result.stateId).then(function (res2) {
                _this.cities = res2.result;
            });
        });
    };
    AddUserComponent.prototype.getRoles = function () {
        var _this = this;
        return this.userService.getUserRoles().then(function (response) {
            _this.roles = response.result;
        });
    };
    AddUserComponent.prototype.onBlur = function (mobile) {
        if (mobile !== undefined && mobile !== '') {
            if (mobile.length < 10) {
                this.showSelected = true;
                this.phoneempty = false;
            }
            else {
                this.showSelected = false;
            }
        }
    };
    /**
      * Method for Get the states based on country
      *
      * @method getStatesList
      * @param {String} Country ID
      * @return {Object} Available States
      */
    AddUserComponent.prototype.getStatesList = function () {
        var _this = this;
        this.userService.getStates(this.user.countryId).then(function (data) {
            _this.states = data.result;
        });
        this.cities = [];
        this.user.stateId = null;
        this.user.cityId = null;
    };
    /**
      * Method for Get the cities based on state
      *
      * @method getCitiesList
      * @param {String} State ID
      * @return {Object} Available Cities
      */
    AddUserComponent.prototype.getCitiesList = function () {
        var _this = this;
        this.userService.getCities(this.user.stateId).then(function (data) {
            _this.cities = data.result;
        });
    };
    AddUserComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddUserComponent.prototype.saveUserDetails = function (form, user) {
        var _this = this;
        this.isValidFormSubmitted = false;
        this.isValidFormSubmitted = true;
        this.showLoader = true;
        if (this.userId) {
            this.userService.updateUser(user, this.userId).then(function (users) {
                if (users.success = true) {
                    _this.showLoader = false;
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '9999');
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#success-alert-user-updated').fadeTo(2000, 500).slideUp(500, function () {
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('#success-alert-user-updated').slideUp(500);
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '-1000');
                    });
                    _this.router.navigate(['/user']);
                }
                else {
                    _this.router.navigate(['/user']);
                }
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '9999');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#error-alert-user').fadeTo(2000, 500).slideUp(500, function () {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#error-alert-user').slideUp(500);
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '-1000');
                });
                _this.showLoader = false;
            });
        }
        else {
            this.userService.addUser(this.user).then(function (users) {
                if (users.success = true) {
                    _this.showLoader = false;
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '9999');
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#success-alert-user').fadeTo(2000, 500).slideUp(500, function () {
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('#success-alert-user').slideUp(500);
                        __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '-1000');
                    });
                    _this.router.navigate(['/user']);
                }
                else {
                    _this.router.navigate(['/user']);
                }
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '9999');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#error-alert-user').fadeTo(2000, 500).slideUp(500, function () {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#error-alert-user').slideUp(500);
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('.alert').css('z-index', '-1000');
                });
                _this.showLoader = false;
            });
        }
    };
    var _a, _b, _c, _d;
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__("./src/app/component/user-management/add-user.component.html"),
            styles: [__webpack_require__("./src/app/component/user-management/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
    ], AddUserComponent);
    return AddUserComponent;
}());

//# sourceMappingURL=add-user.component.js.map

/***/ }),

/***/ "./src/app/component/user-management/user-management.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Small boxes (Stat box) -->\n    <section class=\"content-header\">\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h3 style=\"margin-top:0;\">User Management</h3>\n            </div>\n            <div class=\"col-md-6\">\n                <a [routerLink]=\"['add']\" class=\"btn btn-primary\" style=\"float:right;\">Add User</a>\n            </div>\n        </div>\n        <h4>Total {{count}} users are available.</h4>\n\n\n    </section>\n\n    <section class=\"content\">\n\n        <div class=\"box table-responsive\">\n            <table class=\"table table-bordered\">\n                <tr>\n                    <th (click)=\"sort('id')\" width=\"11%\">ID</th>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Phone</th>\n                    <th class=\"text-center\">Action</th>\n                </tr>\n                <tr>\n                    <th width=\"11%\">\n                        <input [(ngModel)]=\"id\" placeholder=\"search id\" class=\"form-control\" (keyup)=\"searchTerm(id)\">\n                    </th>\n                    <th>\n                        <input [(ngModel)]=\"userName\" placeholder=\"search name...\" class=\"form-control\" (keyup)=\"searchTerm(userName)\">\n                    </th>\n                    <th>\n                        <input [(ngModel)]=\"email\" placeholder=\"search email...\" class=\"form-control\" (keyup)=\"searchTerm(email)\">\n                    </th>\n                    <th>\n                        <input [(ngModel)]=\"mobile\" placeholder=\"search phone...\" class=\"form-control\" (keyup)=\"searchTerm(mobile)\">\n                    </th>\n                    <th></th>\n                </tr>\n\n                <tr *ngFor=\"let x of users | filter:filter ; let i = index\">\n                    <td width=\"11%\">\n                        {{x.id}}\n                    </td>\n                    <td>{{x.firstName}}&nbsp;{{x.lastName}}</td>\n                    <td>{{x.email}}</td>\n                    <td>{{x.mobile}}</td>\n                    <td class=\"action-btn\">\n                        <label class=\"switch\">\n                            <input type=\"checkbox\"  [(ngModel)]=\"x.isActive\" checked=\"x.isActive\" (change)=\"onChange($event, x.id)\">\n                            <span class=\"slider round\"></span>\n                        </label>\n                        <a title=\"Edit\" [routerLink]=\"['edit', x.id]\" class=\"btn btn-xs btn-primary\">\n                            <i class=\"fa fa-pencil\"></i>\n                        </a>\n                        <span class=\"btn btn-xs btn-danger\">\n                            <delete-confirm title=\"Delete\" [question]=\"'Are you sure you want to delete?'\" (onConfirm)=\"sendDelete($event,x)\" (onCancel)=\"sendCancel($event)\"></delete-confirm>\n                        </span>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div *ngIf=\"showLoader\" class=\"fa fa-spinner fa-spin\" style=\"font-size:50px;text-align: center;\n      position: absolute;top: 50%;left: 50%;\"></div>\n    </section>\n    <!-- /.row (main row) -->\n</div>"

/***/ }),

/***/ "./src/app/component/user-management/user-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/component/user-management/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(user) {
        this.user = user;
        this.users = [];
        this.showLoader = false;
        this.searchUser = [];
        this.reverse = false;
        this.count = {};
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        this.getUsersList();
    };
    UserManagementComponent.prototype.getUsersList = function () {
        var _this = this;
        this.showLoader = true;
        this.user.getUsers().then(function (data) {
            _this.users = data.result;
            _this.showLoader = false;
            _this.count = data.count;
            _this.searchUser = JSON.parse(JSON.stringify(data.result));
        }).catch(function (err) {
            console.log(err, '123');
            _this.showLoader = false;
        });
    };
    UserManagementComponent.prototype.onChange = function (event, id) {
        var _this = this;
        this.user.statusChange(event.target.checked, id).then(function (data) {
            _this.showLoader = false;
            $('.alert').css('z-index', '9999');
            $('#success-alert-status').fadeTo(2000, 500).slideUp(500, function () {
                $('#success-alert-status').slideUp(500);
                $('.alert').css('z-index', '-1000');
            });
        }).catch(function (err) {
            console.log(err, '456');
        });
    };
    UserManagementComponent.prototype.searchTerm = function (type) {
        this.users = this.searchUser;
        this.users = this.users.filter(function (response) {
            return (response.firstName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
                || (response.lastName.toLowerCase().indexOf(type.toLowerCase()) !== -1)
                || (response.email.toLowerCase().indexOf(type.toLowerCase()) !== -1)
                || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1)
                || (JSON.stringify(response.mobile).indexOf(type.toLowerCase()) !== -1);
        });
    };
    UserManagementComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    UserManagementComponent.prototype.sendDelete = function ($event, i) {
        var _this = this;
        var index = this.users.indexOf(i);
        var body = { isDelete: true };
        this.user.deleteUser(i.id).then(function (response) {
            _this.users.splice(index, 1);
        });
        $('.alert').css('z-index', '9999');
        $('#error-alert-user-delete').fadeTo(2000, 500).slideUp(500, function () {
            $('#error-alert-user-delete').slideUp(500);
            $('.alert').css('z-index', '-1000');
        });
    };
    UserManagementComponent.prototype.sendCancel = function ($event) {
    };
    var _a;
    UserManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__("./src/app/component/user-management/user-management.component.html"),
            styles: [__webpack_require__("./src/app/component/user-management/user-management.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
    ], UserManagementComponent);
    return UserManagementComponent;
}());

//# sourceMappingURL=user-management.component.js.map

/***/ }),

/***/ "./src/app/component/user-management/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constantAPI__ = __webpack_require__("./src/app/app.constantAPI.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http, httpcaller) {
        this._http = _http;
        this.httpcaller = httpcaller;
    }
    UserService.prototype.getCountries = function () {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].country, 'get', {});
    };
    UserService.prototype.getStates = function (id) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].state + id, 'get', {});
    };
    UserService.prototype.getCities = function (id) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].city + id, 'get', {});
    };
    UserService.prototype.addUser = function (user) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].addUser, 'post', user);
    };
    UserService.prototype.getUsers = function () {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].users, 'get', {});
    };
    UserService.prototype.statusChange = function (status, id) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].status + id, 'put', { 'isActive': status });
    };
    UserService.prototype.getUserRoles = function () {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].roleDropdown, 'get', {});
    };
    UserService.prototype.deleteUser = function (id) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].user + '/' + id, 'delete', {});
    };
    UserService.prototype.updateUser = function (user, id) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].userUpdate + '/' + id, 'put', user);
    };
    UserService.prototype.getUserDetails = function (id) {
        return this.httpcaller.httpcall(__WEBPACK_IMPORTED_MODULE_1__app_constantAPI__["a" /* ConstantApi */].userProfile + '/' + id, 'get', {});
    };
    var _a, _b;
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/app/component/ves/ves-edit.component.css":
/***/ (function(module, exports) {

module.exports = "img{\n    padding-top: 10px;\n    height: 95px;\n    width: 83px;\n};"

/***/ }),

/***/ "./src/app/component/ves/ves-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Small boxes (Stat box) -->\n  <section class=\"content-header\">\n      <h1>Edit Product</h1>\n      <ol class=\"breadcrumb\">\n          <li><a routerLink=\"/ves\"><i class=\"fa fa-dashboard\"></i>Ves</a></li>\n          <li class=\"active\">Edit Product</li>\n        </ol>\n    </section>\n\n  <section class=\"content\">\n    \n      <div class=\"box box-primary\">\n          <!-- <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">{{this.title}}</h3>\n          </div> -->\n          <!-- /.box-header -->\n          <!-- form start -->\n          <form role=\"form\" (ngSubmit)=\"saveCompanyDetails()\">\n            <div class=\"box-body\">\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Product Title<span class=\"astric\">*</span></label>\n                    <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"company.productName\" class=\"form-control\" required pattern=\"[a-zA-Z][a-zA-Z ]+\"\n                    name=\"name\" #name=\"ngModel\" />\n                    <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" placeholder=\"Enter email\" required> -->\n                  </div>\n                 \n                  <div class=\"form-group\">\n                    <label for=\"exampleInputFile\">Product Image<span class=\"astric\">*</span>(Accept only .png,.jpg)</label>\n                    <input type=\"file\" name=\"file\" [(ngModel)]=\"file\" (change)=\"uploadImage($event)\"  accept=\".png,.jpg\" required />\n                    <img *ngIf=\"showpreview\" style=\"padding-bottom:10px;\" src=\"{{images}}\"/>\n                    \n                    <img *ngIf=\"showpreviewafterEdit\" style=\"padding-bottom:10px;\" src=\"{{company.image}}\"/>\n                                    </div>\n                  <div class=\"form-group\">\n                    <label for=\"exampleInputFile\">Document<span class=\"astric\">*</span>(Accept only .pdf,.doc,.docx)</label>\n                    <input type=\"file\" name=\"documentName\"  [(ngModel)]=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\" />\n\n                    <a href=\"{{company.documentName}}\" target=\"_blank\">Read Document</a>\n                    \n                  </div>\n                 \n            </div>\n            <!-- /.box-body -->\n\n            <div class=\"box-footer\">\n                <a class=\"btn btn-default\" routerLink=\"/ves\">Cancel</a>\n                <!-- <button class=\"btn btn-primary\">{{buttonTitle}}</button> -->\n              <button class=\"btn btn-primary\">{{this.buttonTitle}}</button>\n            </div>\n          </form>\n        </div>\n        <!-- <div class=\"alert alert-success\">\n          <strong>Success!</strong> Updated successfully\n        </div> -->\n  </section>\n  <!-- /.row (main row) -->\n</div>\n"

/***/ }),

/***/ "./src/app/component/ves/ves-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VesEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ves_service__ = __webpack_require__("./src/app/component/ves/ves.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VesEditComponent = /** @class */ (function () {
    function VesEditComponent(router, route, vesService) {
        this.router = router;
        this.route = route;
        this.vesService = vesService;
        this.title = 'Add Company';
        this.images = {};
        this.showpreview = false;
        this.showpreviewafterEdit = false;
        this.company = {
            productName: '',
            productCode: '',
            image: '',
            categoryId: {},
            documentName: {},
            category: {},
        };
    }
    VesEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.title = 'edit Ves - Hochiki';
        this.selectName();
        var userId = this.route.snapshot.params['id'];
        if (userId) {
            this.showpreviewafterEdit = true;
            this.title = 'Edit Company';
            this.buttonTitle = 'Update';
            this.vesService.getCompanyDetail(userId).then(function (users) {
                _this.company = users.result;
            });
        }
        else {
            this.buttonTitle = 'save';
        }
    };
    VesEditComponent.prototype.uploadImage = function (file) {
        var _this = this;
        if (file.target.files.length > 0) {
            this.company.image = file.target.files[0];
        }
        if (file.target.files && file.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.images = event.target.result;
                _this.showpreview = true;
                _this.showpreviewafterEdit = false;
            };
            reader.readAsDataURL(file.target.files[0]);
        }
    };
    VesEditComponent.prototype.fileChange = function (event) {
        console.log(event);
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.company.documentName = event.target.files[0];
        }
    };
    VesEditComponent.prototype.selectName = function () {
    };
    VesEditComponent.prototype.saveCompanyDetails = function () {
        var _this = this;
        var userId = this.route.snapshot.params['id'];
        var infoUpdated = new FormData();
        if (typeof this.company.category === 'object') {
            this.company.categoryId = 3;
        }
        for (var keys in this.company) {
            if (keys !== 'file' || 'event') {
                infoUpdated.append(keys, this.company[keys]);
            }
        }
        this.vesService.updateCompany(userId, infoUpdated).then(function (users) {
            $('.alert').css('z-index', '9999');
            $('#updated-alert').fadeTo(2000, 500).slideUp(500, function () {
                $('#updated-alert').slideUp(500);
                $('.alert').css('z-index', '-1000');
            });
            _this.router.navigate(['/ves']);
        });
    };
    var _a, _b, _c;
    VesEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ves-edit',
            template: __webpack_require__("./src/app/component/ves/ves-edit.component.html"),
            styles: [__webpack_require__("./src/app/component/ves/ves-edit.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ves_service__["a" /* VesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ves_service__["a" /* VesService */]) === "function" && _c || Object])
    ], VesEditComponent);
    return VesEditComponent;
}());

//# sourceMappingURL=ves-edit.component.js.map

/***/ }),

/***/ "./src/app/component/ves/ves.component.css":
/***/ (function(module, exports) {

module.exports = ".imgsize{\n    height: 43px;\n}\n.search-container {\n    \n      float: right;\n      padding: 6px 10px;\n      margin-top: 8px;\n      margin-right: 16px;\n      margin-top: -3px;\n      font-size: 17px;\n      border: none;\n      cursor: pointer;\n    }\n.action a,.action span{\n        display:inline-block;\n        margin-left: 10px;\n        \n    }    "

/***/ }),

/***/ "./src/app/component/ves/ves.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Small boxes (Stat box) -->\n    <section class=\"content-header\">\n        <h1>VES</h1>\n        <ol class=\"breadcrumb\">\n                <li>\n                  <a routerLink=\"/dashboard\">\n                    <i class=\"fa fa-dashboard\"></i>Dashboard</a>\n                </li>\n                <li class=\"active\">Ves</li>\n              </ol>\n    </section>\n\n    <section class=\"content\">\n        <div class=\"box table-responsive\">\n           \n            <table class=\"table table-bordered\">\n                <tr>\n                    <th (click)=\"sort('id')\" width=\"10%\">ID<span class=\"glyphicon sort-icon\" *ngIf=\"key =='id'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n                    <th>Product Image</th>\n                    <th (click)=\"sort('name')\">Product Title<span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n                    <th class=\"text-center\">Status</th>\n                    <th>Action</th>\n                </tr>\n                <tr>\n                    <th><input [(ngModel)]=\"id\" placeholder=\"search id\" class=\"form-control\"\n                        (keyup)=\"searchTerm(id)\" width=\"10%\"></th>\n                    <th></th>\n                    <th><input [(ngModel)]=\"productName\" placeholder=\"search product title\" class=\"form-control\"\n                        (keyup)=\"searchTerm(productName)\"></th>\n                    <th></th>\n                    <th></th>\n                </tr>\n                <tr *ngFor=\"let x of company |orderBy: key : reverse | filter:filter; let i = index\">\n                    <td width=\"10%\">\n                    {{x.id}}\n                    </td>\n                    <td><img src=\"{{x.image}}\" class=\"imgsize\" ></td>\n                    \n                    <td>{{x.productName}}</td>\n                    <td class=\"text-center\"> <div *ngIf=\"x.isActive === true\">Active</div>\n                        <div *ngIf=\"x.isActive === false\">Inactive</div></td>\n                    <td class=\"text-center action\" width=\"100\">\n                        <a title=\"Edit\"  [routerLink]=\"['edit', x.id]\" ><i class=\"fa fa-pencil\" style=\"font-size:20px; color:black\"></i></a>\n                        <!-- <a title=\"Delete\" class=\"ml10\" (click)=\"delUser(x.id)\" ><i class=\"fa fa-trash-o\" style=\"font-size:24px; color:black\"></i></a> -->\n                        <span>\n                        <delete-confirm title=\"Delete\"  [question]=\"'Are you sure you want to delete?'\" (onConfirm)=\"sendDelete($event,x.id)\" (onCancel)=\"sendCancel($event)\"></delete-confirm>\n                      </span>\n                    </td>\n                </tr>\n            </table>\n            <div class=\"view-side-form\">\n                <p></p>\n               \n            </div>\n        </div>\n    </section>\n    <!-- /.row (main row) -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/component/ves/ves.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ves_service__ = __webpack_require__("./src/app/component/ves/ves.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VesComponent = /** @class */ (function () {
    function VesComponent(router, vesService) {
        this.router = router;
        this.vesService = vesService;
        this.response = [];
        this.body = '';
        this.company = [];
        this.storeproduct = [];
        this.reverse = false;
    }
    VesComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    VesComponent.prototype.ngOnInit = function () {
        document.title = 'View Product - Ves';
        this.getCompany();
    };
    VesComponent.prototype.getCompany = function () {
        var _this = this;
        return this.vesService.getCompanyList().then(function (response) {
            _this.company = response.result;
            _this.storeproduct = JSON.parse(JSON.stringify(response.result));
            _this.count = response.count;
            var counties = _this.count;
            return counties;
        });
    };
    VesComponent.prototype.searchTerm = function (type) {
        this.company = this.storeproduct;
        this.company = this.company.filter(function (response) {
            var searchresult = false;
            console.log(response.category.name, 'hii');
            return (response.productName.toLowerCase().indexOf(type.toLowerCase()) !== -1) || (JSON.stringify(response.id).indexOf(type.toLowerCase()) !== -1);
        });
    };
    VesComponent.prototype.sendDelete = function ($event, i) {
        var _this = this;
        var index = this.response.indexOf(i);
        var body = { isDelete: true };
        this.vesService.deleteCompany(i, body.isDelete).then(function (response) {
            _this.company.splice(index, 1);
        });
        $('.alert').css('z-index', '9999');
        $('#error-alert').fadeTo(2000, 500).slideUp(500, function () {
            $('#error-alert').slideUp(500);
            $('.alert').css('z-index', '-1000');
        });
        this.getCompany();
    };
    VesComponent.prototype.sendCancel = function ($event) {
        // this.getProduct();
    };
    var _a, _b;
    VesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ves',
            template: __webpack_require__("./src/app/component/ves/ves.component.html"),
            styles: [__webpack_require__("./src/app/component/ves/ves.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ves_service__["a" /* VesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ves_service__["a" /* VesService */]) === "function" && _b || Object])
    ], VesComponent);
    return VesComponent;
}());

//# sourceMappingURL=ves.component.js.map

/***/ }),

/***/ "./src/app/component/ves/ves.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VesService = /** @class */ (function () {
    function VesService(http, httpcaller) {
        this.http = http;
        this.httpcaller = httpcaller;
        this.companyUrl = 'products-list';
        this.company = 'products';
    }
    VesService.prototype.getCompanyList = function () {
        return this.httpcaller.httpcall(this.companyUrl, 'post', { categoryId: 3 });
    };
    VesService.prototype.getCompanyDetail = function (id) {
        return this.httpcaller.httpcall(this.companyUrl + '/' + id, 'get', { categoryId: 3 });
    };
    VesService.prototype.updateCompany = function (id, details) {
        return this.httpcaller.httpformdatacall(this.company + '/' + id, 'put', details);
    };
    VesService.prototype.deleteCompany = function (id, isDelete) {
        return this.httpcaller.httpcall(this.company + '/' + id, 'delete');
    };
    var _a, _b;
    VesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object])
    ], VesService);
    return VesService;
}());

//# sourceMappingURL=ves.service.js.map

/***/ }),

/***/ "./src/app/gaurds/authenticate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticateGuard = /** @class */ (function () {
    function AuthenticateGuard(router) {
        this.router = router;
    }
    AuthenticateGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('auth')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login']);
        return false;
    };
    var _a;
    AuthenticateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], AuthenticateGuard);
    return AuthenticateGuard;
}());

//# sourceMappingURL=authenticate.guard.js.map

/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.httpcall = function (url, method, data) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('auth')
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        if (method !== 'put' && method !== 'post') {
            return this.http[method](__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* Constant */].url + url, options, data)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        }
        else {
            return this.http[method](__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* Constant */].url + url, data, options)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        }
    };
    HttpService.prototype.httpformdatacall = function (url, method, data) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'x-access-token': localStorage.getItem('auth')
        });
        var options4 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        if (method !== 'put' && method !== 'post') {
            return this.http[method](__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* Constant */].url + url, options4, data)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        }
        else {
            return this.http[method](__WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* Constant */].url + url, data, options4)
                .toPromise()
                .then(this.extractData)
                .catch(this.handleError);
        }
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    var _a;
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "./src/app/types/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapAlertType; });
/* unused harmony export BootstrapAlert */
var BootstrapAlertType;
(function (BootstrapAlertType) {
    BootstrapAlertType[BootstrapAlertType["SUCCESS"] = 0] = "SUCCESS";
    BootstrapAlertType[BootstrapAlertType["INFO"] = 1] = "INFO";
    BootstrapAlertType[BootstrapAlertType["WARNING"] = 2] = "WARNING";
    BootstrapAlertType[BootstrapAlertType["DANGER"] = 3] = "DANGER";
})(BootstrapAlertType || (BootstrapAlertType = {}));
var BootstrapAlert = /** @class */ (function () {
    function BootstrapAlert() {
    }
    return BootstrapAlert;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    url: 'http://dev.credencys.com:3038/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map