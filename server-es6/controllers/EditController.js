import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import path from 'path';

export class EditController {

	buildTheme(req, res) {
		
		let pathToThemes = path.join(__dirname, '../assets/themes/' + req.body.id);

		gulp.src(pathToThemes + '/theme.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(concat('theme.css'))
			.pipe(autoprefixer({
				browsers: ['> 0.1%'],
				cascade: false
			}))
			.pipe(cleanCSS({
				level: 2
			}))
			.pipe(gulp.dest(pathToThemes));

		res.send({'message' : 'success'});
	}
}