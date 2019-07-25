"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = __importDefault(require("gulp"));
var gulp_sass_1 = __importDefault(require("gulp-sass"));
var gulp_concat_1 = __importDefault(require("gulp-concat"));
var gulp_autoprefixer_1 = __importDefault(require("gulp-autoprefixer"));
var path_1 = __importDefault(require("path"));
var BaseController_1 = require("./BaseController");
var config_json_1 = require("../config/config.json");
var cleanCSS = require('gulp-clean-css');
var EditController = /** @class */ (function (_super) {
    __extends(EditController, _super);
    function EditController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get Theme By Id
     * @param req
     * @param res
     */
    EditController.prototype.getThemById = function (req, res) {
        var themes = this.getThemes();
        res.status(200).send(themes.filter(function (theme) {
            return theme.id == req.params.id;
        }));
    };
    /**
     * Refresh Theme
     * @param req
     * @param res
     */
    EditController.prototype.refreshTheme = function (req, res) {
    };
    /**
     * Build theme
     * @param req
     * @param res
     */
    EditController.prototype.buildTheme = function (req, res) {
        var pathToThemes = path_1.default.join(__dirname, config_json_1.themePath + req.body.id);
        gulp_1.default.src(pathToThemes + '/theme.scss')
            .pipe(gulp_sass_1.default().on('error', gulp_sass_1.default.logError))
            .pipe(gulp_concat_1.default('theme.css'))
            .pipe(gulp_autoprefixer_1.default({
            //browsers: ['> 0.1%'],
            cascade: false
        }))
            /*.pipe(cleanCSS({
                level: 2
            }))*/
            .pipe(gulp_1.default.dest(pathToThemes));
        res.status(200).send({ 'message': 'success' });
    };
    return EditController;
}(BaseController_1.BaseController));
exports.EditController = EditController;
