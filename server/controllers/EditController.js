import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import path from 'path';

class EditController {

	pathToCss = path.join(__dirname, '../assets/themes/css/');

	createTheme() {
		gulp.src(path.join('../assets/scss/theme.scss'))
			.pipe(sass())
			.pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7']))
			.pipe(gulp.dest(this.pathToCss));

		this.cssMin();
	}
	cssMin() {
		gulp.src(this.pathToCss + 'theme.css')
			.pipe(cssnano({
				autoprefixer: {browsers: ['last 15 versions', '>1%', 'ie 8', 'ie 7']}
			}))
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest(this.pathToCss));
	}
}

module.exports = EditController;
