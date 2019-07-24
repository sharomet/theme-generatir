"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = __importDefault(require("gulp"));
var gulp_sass_1 = __importDefault(require("gulp-sass"));
var gulp_autoprefixer_1 = __importDefault(require("gulp-autoprefixer"));
var path_1 = __importDefault(require("path"));
var cleanCSS = require('gulp-clean-css');
var EditController = /** @class */ (function () {
    function EditController() {
    }
    EditController.prototype.build = function (req, res) {
        var pathToThemes = path_1.default.join(__dirname, '../assets/themes/' + req.body.id);
        gulp_1.default.src(pathToThemes + '/theme.scss')
            .pipe(gulp_sass_1.default().on('error', gulp_sass_1.default.logError))
            //.pipe(concat('theme.css'))
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
}());
exports.EditController = EditController;
