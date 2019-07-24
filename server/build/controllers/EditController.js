"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var config_json_1 = require("../config/config.json");
var cleanCSS = require('gulp-clean-css');
var EditController = /** @class */ (function () {
    function EditController() {
    }
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
        res.send({ "path": pathToThemes });
        /*gulp.src(pathToThemes + '/theme.scss')
            .pipe(sass().on('error', sass.logError))*/
        //.pipe(concat('theme.css'))
        //.pipe(autoprefixer({
        //browsers: ['> 0.1%'],
        /*cascade: false
    }))*/
        /*.pipe(cleanCSS({
            level: 2
        }))*/
        //.pipe(gulp.dest(pathToThemes));
        //res.status(200).send({ 'message': 'success' });
    };
    return EditController;
}());
exports.EditController = EditController;
