"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("./controllers");
var Router = /** @class */ (function () {
    function Router() {
        this.homeController = new controllers_1.HomeController();
        this.editController = new controllers_1.EditController();
        this.apiUrl = '/api/';
    }
    Router.prototype.routes = function (app) {
        var _this = this;
        app.get(this.apiUrl + 'home', function (req, res) { return _this.homeController.getAllThemes(req, res); })
            .post(this.apiUrl + 'build', function (req, res) { _this.editController.build(req, res); })
            .post(this.apiUrl + 'create', function (req, res) { return _this.homeController.createTheme(req, res); })
            .get(this.apiUrl + 'theme/:id', function (req, res) { return _this.homeController.getTheme(req, res); });
    };
    return Router;
}());
exports.Router = Router;
