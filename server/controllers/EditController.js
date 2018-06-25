import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import path from 'path';

let pathToCss = path.join(__dirname, '../assets/themes/');

exports.buildTheme = (req, res) => {
    let build = gulp.src(path.join('./assets/scss/theme.scss'))
			.pipe(sass())
			.pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7']))
			.pipe(gulp.dest(pathToCss + req.body.id));

	res.send({'message' : 'success'});
};