"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var guid_1 = __importDefault(require("guid"));
var ncp = require('ncp');
var HomeController = /** @class */ (function () {
    function HomeController() {
        this.pathToThemes = path_1.default.join(__dirname, '../assets/themes/');
    }
    HomeController.prototype.getAllThemes = function (req, res) {
        res.status(200).send(this.getThemes());
    };
    HomeController.prototype.createTheme = function (req, res) {
        var _this = this;
        var copyTheme = 'defaultTheme';
        var id = guid_1.default.create();
        var copy = false;
        var jsonData = this.getThemes();
        var theme = {
            id: id,
            name: req.body.name,
            copy: copy
        };
        jsonData.push(theme);
        this.saveJsonFile(jsonData, function (result) {
            if (!result) {
                res.send({ 'message': 'error' });
            }
            ncp(_this.pathToThemes + copyTheme, _this.pathToThemes + id, function (err) {
                if (err) {
                    res.send({ 'message': 'error' });
                }
                res.send(theme);
            });
        });
    };
    HomeController.prototype.saveJsonFile = function (data, response) {
        fs_1.default.writeFile(this.pathToThemes + 'themes.json', JSON.stringify(data), function (err) {
            if (err) {
                response(false);
            }
            else {
                response(true);
            }
        });
    };
    HomeController.prototype.getThemes = function () {
        return JSON.parse(fs_1.default.readFileSync(this.pathToThemes + 'themes.json', 'utf8'));
    };
    return HomeController;
}());
exports.HomeController = HomeController;
