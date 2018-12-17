"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("./controllers");
var Router = /** @class */ (function () {
    function Router() {
        this.homeController = new controllers_1.HomeController();
    }
    Router.prototype.routes = function (app) {
        var _this = this;
        app.get('/api/home', function (res) { return _this.homeController.getAllThemes(res); });
        //app.route('/api/home').get((req: Request, res: Response) => res.send(this.homeController.getAllThemes));
    };
    return Router;
}());
exports.Router = Router;
