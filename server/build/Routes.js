"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("./controllers");
var Router = /** @class */ (function () {
    function Router() {
        this.homeController = new controllers_1.HomeController();
        this.editController = new controllers_1.EditController();
    }
    Router.prototype.routes = function (app) {
        var _this = this;
        app.get('/api/home', function (res) { return _this.homeController.getAllThemes(res); });
        app.post('/api/build', function (req, res) { return _this.editController.build(req, res); });
    };
    return Router;
}());
exports.Router = Router;
