"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var HomeController = /** @class */ (function () {
    function HomeController() {
        this.pathToThemes = path_1.default.join(__dirname, '../assets/themes/');
    }
    HomeController.prototype.getAllThemes = function (req, res) {
        res.status(200).send(this.getThemes());
    };
    HomeController.prototype.getThemes = function () {
        return JSON.parse(fs_1.default.readFileSync(this.pathToThemes + 'themes.json', 'utf8'));
    };
    return HomeController;
}());
exports.HomeController = HomeController;
