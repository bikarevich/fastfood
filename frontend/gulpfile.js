const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const serve = require('gulp-serve');

gulp.task('scripts', () => {
	gulp.src('app/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/dist'));
});

gulp.task('styles', () => {
	return gulp.src('app/styles/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('app/styles/css'));
});

gulp.task('scripts:watch', () => {
	gulp.watch(['app/**/*.js', '!app/dist/**/*.js'], ['scripts']);
});

gulp.task('styles:watch', () => {
	gulp.watch('app/styles/**/*.scss', ['styles']);
});

gulp.task('serve', ['scripts', 'styles', 'scripts:watch', 'styles:watch'], serve('app'));
