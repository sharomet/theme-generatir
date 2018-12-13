import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import path from 'path';

let pathToCss = path.join(__dirname, '../assets/themes/');

exports.buildTheme = (req, res) => {
    let build = gulp.src(pathToCss + req.body.id + '/theme.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(concat('theme.css'))
			.pipe(autoprefixer({
				browsers: ['> 0.1%'],
				cascade: false
			}))
			.pipe(cleanCSS({
				level: 2
			}))
			.pipe(gulp.dest(pathToCss + req.body.id));

	res.send({'message' : 'success'});		
};