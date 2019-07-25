"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var BaseController = /** @class */ (function () {
    function BaseController() {
        this.pathToThemes = path_1.default.join(__dirname, '../assets/themes/');
    }
    BaseController.prototype.getThemes = function () {
        return JSON.parse(fs_1.default.readFileSync(this.pathToThemes + 'themes.json', 'utf8'));
    };
    return BaseController;
}());
exports.BaseController = BaseController;
