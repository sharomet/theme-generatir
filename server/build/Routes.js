"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_json_1 = require("./config/config.json");
var controllers_1 = require("./controllers");
var Router = /** @class */ (function () {
    function Router() {
        this.homeController = new controllers_1.HomeController();
        this.editController = new controllers_1.EditController();
    }
    Router.prototype.routes = function (app) {
        var _this = this;
        app.get(config_json_1.apiUrl + 'home', function (req, res) { return _this.homeController.getAllThemes(req, res); })
            .post(config_json_1.apiUrl + 'refresh', function (req, res) { return _this.editController.refreshTheme(req, res); })
            .post(config_json_1.apiUrl + 'build', function (req, res) { return _this.editController.buildTheme(req, res); })
            .post(config_json_1.apiUrl + 'create', function (req, res) { return _this.homeController.createTheme(req, res); })
            .get(config_json_1.apiUrl + 'theme/:id', function (req, res) { return _this.editController.getThemById(req, res); });
    };
    return Router;
}());
exports.Router = Router;
