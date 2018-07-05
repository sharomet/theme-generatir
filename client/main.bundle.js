webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/components/home/home.component.ts");
var appRoutes = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: '**', component: home_component_1.HomeComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var theme_service_1 = __webpack_require__("./src/app/services/theme.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/components/home/home.component.ts");
var theme_list_component_1 = __webpack_require__("./src/app/components/theme-list/theme-list.component.ts");
var footer_component_1 = __webpack_require__("./src/app/components/footer/footer.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                theme_list_component_1.ThemeListComponent,
                footer_component_1.FooterComponent,
            ],
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            providers: [
                theme_service_1.ThemeService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"messageClass\" *ngIf=\"message\" class=\"alert\" role=\"alert\">\n\t{{ message }}\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n\n<div id=\"wrapper\" class=\"container-fluid h-100\">\n\t<div class=\"row h-100\">\n\n\t\t<aside class=\"col-lg-3 col-md-4 pr-md-1 h-100\">\n\t\t\t<div class=\"card h-100\">\n\t\t\t\t<div class=\"card-header bg-primary text-white d-flex align-items-center justify-content-between\">\n\t\t\t\t\t<span>Themes</span>\n\t\t\t\t\t<button (click)=\"open(content)\" class=\"btn btn-success btn-sm\" data-tooltip=\"tooltip\" data-placement=\"left\"\n\t\t\t\t\t title=\"Create\">\n\t\t\t\t\t\t<i class=\"fas fa-plus\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t\t\t<li *ngFor=\"let theme of themes\" class=\"list-group-item justify-content-between d-flex\">\n\t\t\t\t\t\t<a routerLink=\"/edit/{{ theme.id }}\">{{ theme.name }}</a>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"buildTheme(theme.id)\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Build\">\n\t\t\t\t\t\t\t\t<i class=\"fas fa-cogs\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<a class=\"btn btn-primary btn-sm\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Edit\">\n\t\t\t\t\t\t\t\t<i class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a class=\"btn btn-success btn-sm\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Copy\">\n\t\t\t\t\t\t\t\t<i class=\"far fa-copy\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a class=\"btn btn-danger btn-sm\" (click)=\"deleteTheme(theme.id)\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Delete\">\n\t\t\t\t\t\t\t\t<i class=\"far fa-trash-alt\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a class=\"btn btn-warning btn-sm\" href=\"#\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Generate\">\n\t\t\t\t\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t</aside>\n\n\t\t<main class=\"col-lg-9 col-md-8 pl-md-1 h-100\">\n\t\t\t<div class=\"card h-100\">\n\t\t\t\t<div class=\"card-header bg-primary text-white\">Preview</div>\n\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\tMain\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</main>\n\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"createTheme\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"createTheme\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-sm\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header text-white bg-primary p-2\">\n\t\t\t\tCreate new Theme\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<form (ngSubmit)=\"createTheme()\">\n\t\t\t\t<div class=\"modal-body p-2\">\n\t\t\t\t\t<div class=\"form-group mb-0\">\n\t\t\t\t\t\t<label for=\"newThemeName\">Theme Name</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"newThemeName\" class=\"form-control\" [(ngModel)]=\"themeName\" name=\"themeName\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer p-2\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Create</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t<div class=\"modal-content\">\n\t\t<div class=\"modal-header text-white bg-primary p-2\">\n\t\t\tCreate new Theme\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d()\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t</button>\n\t\t</div>\n\t\t<form (ngSubmit)=\"createTheme()\">\n\t\t\t<div class=\"modal-body p-2\">\n\t\t\t\t<div class=\"form-group mb-0\">\n\t\t\t\t\t<label for=\"newThemeName\">Theme Name</label>\n\t\t\t\t\t<input type=\"text\" id=\"newThemeName\" class=\"form-control\" [(ngModel)]=\"themeName\" name=\"themeName\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer p-2\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"d('test')\">Close</button>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Create</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var toaster_js_1 = __webpack_require__("./node_modules/toaster-js/index.js");
var theme_service_1 = __webpack_require__("./src/app/services/theme.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(themeService, modalService) {
        var _this = this;
        this.themeService = themeService;
        this.modalService = modalService;
        this.themes = [];
        this.themeService.getAllThemes().subscribe(function (themes) {
            _this.themes = themes;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
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
                toaster_js_1.configureToasts({
                    topOrigin: 0,
                    deleteDelay: 7000
                });
                new toaster_js_1.Toast('Theme Created!', toaster_js_1.Toast.TYPE_DONE);
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
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [theme_service_1.ThemeService,
            ng_bootstrap_1.NgbModal])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/components/theme-list/theme-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/theme-list/theme-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group list-group-flush\">\n\t<li *ngFor=\"let theme of themes\" class=\"list-group-item justify-content-between d-flex\">\n\t\t<a routerLink=\"/edit/{{ theme.id }}\">{{ theme.name }}</a>\n\t\t<div>\n\t\t\t<button class=\"btn btn-primary btn-sm\" (click)=\"buildTheme(theme.id)\" data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Build\">\n\t\t\t\t<i class=\"fas fa-cogs\"></i>\n\t\t\t</button>\n\t\t\t<a class=\"btn btn-primary btn-sm\" href=\"#\"  data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Edit\">\n\t\t\t\t<i class=\"fas fa-pencil-alt\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"btn btn-success btn-sm\" href=\"#\"  data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Copy\">\n\t\t\t\t<i class=\"far fa-copy\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"btn btn-danger btn-sm\" href=\"#\"  data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Delete\">\n\t\t\t\t<i class=\"far fa-trash-alt\"></i>\n\t\t\t</a>\n\t\t\t<a class=\"btn btn-warning btn-sm\" href=\"#\"  data-tooltip=\"tooltip\" data-placement=\"left\" title=\"Generate\">\n\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t</a>\n\t\t</div>\n\t</li>\n</ul>"

/***/ }),

/***/ "./src/app/components/theme-list/theme-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var theme_service_1 = __webpack_require__("./src/app/services/theme.service.ts");
var ThemeListComponent = /** @class */ (function () {
    function ThemeListComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.themes = [];
        this.setMessage = new core_1.EventEmitter();
        this.setMessageClass = new core_1.EventEmitter();
        this.themeService.getAllThemes().subscribe(function (themes) {
            _this.themes = themes;
        });
    }
    ThemeListComponent.prototype.ngOnInit = function () {
        this.themes.push(this.themeInput);
        console.log(this.themeInput);
    };
    /**
     * Build Theme
     */
    ThemeListComponent.prototype.buildTheme = function (id) {
        var _this = this;
        this.themeService.buildTheme({ id: id }).subscribe(function (data) {
            if (data.message == 'success') {
                _this.setMessage.emit('Success! User Added.');
                _this.setMessageClass.emit('alert-success');
            }
            else {
                _this.setMessage.emit('Error!');
                _this.setMessageClass.emit('alert-danger');
            }
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ThemeListComponent.prototype, "setMessage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ThemeListComponent.prototype, "setMessageClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ThemeListComponent.prototype, "themeInput", void 0);
    ThemeListComponent = __decorate([
        core_1.Component({
            selector: 'app-theme-list',
            template: __webpack_require__("./src/app/components/theme-list/theme-list.component.html"),
            styles: [__webpack_require__("./src/app/components/theme-list/theme-list.component.css")]
        }),
        __metadata("design:paramtypes", [theme_service_1.ThemeService])
    ], ThemeListComponent);
    return ThemeListComponent;
}());
exports.ThemeListComponent = ThemeListComponent;


/***/ }),

/***/ "./src/app/services/theme.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var ThemeService = /** @class */ (function () {
    function ThemeService(http) {
        this.http = http;
        this.apiUrl = '/api/home';
        this.buildUrl = '/api/build';
        this.createUrl = '/api/create';
        this.deleteUrl = '/api/delete/';
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
    }
    /**
     * Get All Theme
     */
    ThemeService.prototype.getAllThemes = function () {
        return this.http.get(this.apiUrl)
            .pipe(operators_1.catchError(this.handleError));
    };
    /**
     * Build Theme
     */
    ThemeService.prototype.buildTheme = function (id) {
        return this.http.post(this.buildUrl, id, { headers: this.headers })
            .pipe(operators_1.catchError(this.handleError));
    };
    /**
     * Create Theme
     */
    ThemeService.prototype.createTheme = function (name, id) {
        if (id === void 0) { id = null; }
        return this.http.post(this.createUrl, name, { headers: this.headers })
            .pipe(operators_1.catchError(this.handleError));
    };
    /**
     * Delete Theme
     */
    ThemeService.prototype.deleteTheme = function (id) {
        return this.http.post(this.deleteUrl + id, { headers: this.headers })
            .pipe(operators_1.catchError(this.handleError));
    };
    ThemeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ThemeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ThemeService);
    return ThemeService;
}());
exports.ThemeService = ThemeService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map