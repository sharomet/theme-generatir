import { Request, Response } from 'express'
import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import path from 'path';

const cleanCSS = require('gulp-clean-css');

export class EditController {

	public build(req: Request, res: Response) {

		let pathToThemes = path.join(__dirname, '../assets/themes/' + req.body.id);

		gulp.src(pathToThemes + '/theme.scss')
			.pipe(sass().on('error', sass.logError))
			//.pipe(concat('theme.css'))
			.pipe(autoprefixer({
				//browsers: ['> 0.1%'],
				cascade: false
			}))
			/*.pipe(cleanCSS({
				level: 2
			}))*/
			.pipe(gulp.dest(pathToThemes));

		res.status(200).send({ 'message': 'success' });

	}
}