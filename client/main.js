(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




var appRoutes = [
    { path: 'dashboard', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n    <app-navbar></app-navbar>\r\n\r\n    <div class=\"content h-100\">\r\n            \r\n        <router-outlet></router-outlet>\r\n\r\n        <app-footer></app-footer>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/theme.service */ "./src/app/services/theme.service.ts");
/* harmony import */ var _services_aside_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/aside.service */ "./src/app/services/aside.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_theme_list_theme_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/theme-list/theme-list.component */ "./src/app/components/theme-list/theme-list.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_theme_list_theme_list_component__WEBPACK_IMPORTED_MODULE_11__["ThemeListComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [
                _services_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"],
                _services_aside_service__WEBPACK_IMPORTED_MODULE_8__["AsideService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"messageClass\" *ngIf=\"message\" class=\"alert\" role=\"alert\">\n\t{{ message }}\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n\n<aside class=\"aside h-100\" [ngClass]=\"{ 'open': asideService.open }\">\n\t<div class=\"card h-100\">\n\n\t\t<div class=\"card-header bg-primary text-white d-flex align-items-center justify-content-between\">\n\t\t\t<span>Themes</span>\n\t\t\t<button (click)=\"open(content)\" class=\"btn btn-light btn-sm\" data-tooltip=\"tooltip\" data-placement=\"left\"\n\t\t\t\ttitle=\"Create\">\n\t\t\t\t<i class=\"fas fa-plus\"></i>\n\t\t\t</button>\n\t\t</div>\n\n\t\t<!-- <ul class=\"list-group list-group-flush\" *ngIf=\"themes?.length > 0\">\n\t\t\t<li *ngFor=\"let theme of themes\" class=\"list-group-item justify-content-between d-flex\">\n\t\t\t\t<a routerLink=\"/edit/{{ theme.id }}\">{{ theme.name }}</a>\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"buildTheme(theme.id)\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Build\">\n\t\t\t\t\t\t<i class=\"fas fa-cogs\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t\t<a class=\"btn btn-primary btn-sm\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Edit\">\n\t\t\t\t\t\t<i class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"btn btn-success btn-sm\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Copy\">\n\t\t\t\t\t\t<i class=\"far fa-copy\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"btn btn-danger btn-sm\" (click)=\"deleteTheme(theme.id)\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Delete\">\n\t\t\t\t\t\t<i class=\"far fa-trash-alt\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"btn btn-warning btn-sm\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Generate\">\n\t\t\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul> -->\n\n\t\t<app-theme-list [themes]=\"themes\"></app-theme-list>\n\n\t</div>\n\n</aside>\n\n<main class=\"main h-100\">\n\t<div class=\"card h-100\">\n\t\t<div class=\"card-header bg-primary text-white\">Preview</div>\n\n\t\t<div class=\"card-body\">\n\t\t\tMain\n\t\t</div>\n\n\t</div>\n</main>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t<div class=\"modal-content\">\n\t\t<div class=\"modal-header text-white bg-primary p-2\">\n\t\t\tCreate new Theme\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d()\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t</div>\n\t\t<form (ngSubmit)=\"createTheme()\">\n\t\t\t<div class=\"modal-body p-2\">\n\t\t\t\t<div class=\"form-group mb-0\">\n\t\t\t\t\t<label for=\"newThemeName\">Theme Name</label>\n\t\t\t\t\t<input type=\"text\" id=\"newThemeName\" class=\"form-control\" [(ngModel)]=\"themeName\" name=\"themeName\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer p-2\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"d('test')\">Close</button>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Create</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var toaster_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toaster-js */ "./node_modules/toaster-js/index.js");
/* harmony import */ var _services_aside_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/aside.service */ "./src/app/services/aside.service.ts");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/services/theme.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(themeService, modalService, asideService) {
        var _this = this;
        this.themeService = themeService;
        this.modalService = modalService;
        this.asideService = asideService;
        this.themeService.getAllThemes().subscribe(function (themes) { return _this.themes = themes; });
    }
    HomeComponent.prototype.ngOnInit = function () {
        Object(toaster_js__WEBPACK_IMPORTED_MODULE_3__["configureToasts"])({
            topOrigin: 0,
            deleteDelay: 7000
        });
    };
    /**
       * Create New Theme
       */
    HomeComponent.prototype.createTheme = function () {
        var _this = this;
        this.themeService.createTheme({ name: this.themeName })
            .subscribe(function (data) {
            if (data.message == 'error') {
                _this.messageClass = 'alert-error';
                _this.message = 'Error';
            }
            else {
                _this.modalRef.close();
                _this.themeName = '';
                new toaster_js__WEBPACK_IMPORTED_MODULE_3__["Toast"]('Theme Created!', toaster_js__WEBPACK_IMPORTED_MODULE_3__["Toast"].TYPE_DONE);
                _this.themes.push(data);
            }
        });
    };
    /**
       * Build Theme
       */
    HomeComponent.prototype.buildTheme = function (id) {
        var _this = this;
        this.themeService.buildTheme({ id: id })
            .subscribe(function (data) {
            if (data.message == 'success') {
                _this.message = 'Success! User Added.';
                _this.messageClass = 'alert-success';
            }
            else {
                _this.message = 'Error!';
                _this.messageClass = 'alert-danger';
            }
        });
    };
    /**
     * Delete Theme
     */
    HomeComponent.prototype.deleteTheme = function (id) {
        var _this = this;
        this.themeService.deleteTheme(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == 'error') {
                _this.message = 'Error!';
                _this.messageClass = 'alert-danger';
            }
            else {
                _this.message = 'Theme Deleted!';
                _this.messageClass = 'alert-success';
                _this.themes = data;
            }
        });
    };
    /**
     * Open Modal
     */
    HomeComponent.prototype.open = function (content) {
        this.modalRef = this.modalService.open(content, { size: 'sm' });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services_aside_service__WEBPACK_IMPORTED_MODULE_4__["AsideService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n\n    <a class=\"btn mr-3 text-white\" (click)=\"toggleAside($event)\">\n      <i class=\"fas fa-bars\"></i>\n    </a>\n\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#topMenu\" aria-controls=\"topMenu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"topMenu\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li>\n      </ul>\n    </div>\n\n  </nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_aside_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/aside.service */ "./src/app/services/aside.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(asideService) {
        this.asideService = asideService;
        this.open = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleAside = function (event) {
        event.preventDefault();
        this.asideService.toggleAside();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_aside_service__WEBPACK_IMPORTED_MODULE_2__["AsideService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/theme-list/theme-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/theme-list/theme-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhlbWUtbGlzdC90aGVtZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/theme-list/theme-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/theme-list/theme-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"text-center text-muted text-lg\" *ngIf=\"themes?.length == 0\">Create New Theme</h5>\n\n<ul class=\"list-group list-group-flush list-themes\" *ngIf=\"themes?.length > 0\">\n\t<li *ngFor=\"let theme of themes\" class=\"list-group-item justify-content-between d-flex align-items-center\">\n\t\t<a routerLink=\"/edit/{{ theme.id }}\">{{ theme.name }}</a>\n\t\t<div>\n\t\t\t<button class=\"btn btn-primary btn-sm\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Build\">\n\t\t\t\t<i class=\"fas fa-cogs\"></i>\n\t\t\t</button>\n\t\t\t<a class=\"btn btn-primary btn-sm\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Edit\">\n\t\t\t\t<i class=\"fas fa-pencil-alt\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"btn btn-success btn-sm\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Copy\">\n\t\t\t\t<i class=\"far fa-copy\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"btn btn-danger btn-sm\"  href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Delete\">\n\t\t\t\t<i class=\"far fa-trash-alt\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"btn btn-warning btn-sm\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Generate\">\n\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t</a>\n\t\t</div>\n\t</li>\n</ul>"

/***/ }),

/***/ "./src/app/components/theme-list/theme-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/theme-list/theme-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ThemeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeListComponent", function() { return ThemeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/services/theme.service.ts");



var ThemeListComponent = /** @class */ (function () {
    function ThemeListComponent(themeService) {
        this.themeService = themeService;
        this.setMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.setMessageClass = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ThemeListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThemeListComponent.prototype, "setMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThemeListComponent.prototype, "setMessageClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ThemeListComponent.prototype, "themes", void 0);
    ThemeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme-list',
            template: __webpack_require__(/*! ./theme-list.component.html */ "./src/app/components/theme-list/theme-list.component.html"),
            styles: [__webpack_require__(/*! ./theme-list.component.css */ "./src/app/components/theme-list/theme-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]])
    ], ThemeListComponent);
    return ThemeListComponent;
}());



/***/ }),

/***/ "./src/app/services/aside.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/aside.service.ts ***!
  \*******************************************/
/*! exports provided: AsideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideService", function() { return AsideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AsideService = /** @class */ (function () {
    function AsideService() {
        this.open = true;
    }
    AsideService.prototype.toggleAside = function () {
        this.open = !this.open;
    };
    AsideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AsideService);
    return AsideService;
}());



/***/ }),

/***/ "./src/app/services/theme.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ThemeService = /** @class */ (function () {
    function ThemeService(http) {
        this.http = http;
        this.apiUrl = '/api/home';
        this.buildUrl = '/api/build';
        this.createUrl = '/api/create';
        this.deleteUrl = '/api/delete/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    /**
     * Get All Theme
     */
    ThemeService.prototype.getAllThemes = function () {
        return this.http.get(this.apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Build Theme
     */
    ThemeService.prototype.buildTheme = function (id) {
        return this.http.post(this.buildUrl, id, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Create Theme
     */
    ThemeService.prototype.createTheme = function (name, id) {
        if (id === void 0) { id = null; }
        return this.http.post(this.createUrl, name, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    /**
     * Delete Theme
     */
    ThemeService.prototype.deleteTheme = function (id) {
        return this.http.post(this.deleteUrl + id, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ThemeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ThemeService);
    return ThemeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\theme-generator\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map