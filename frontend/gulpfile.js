const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const source = require('vinyl-source-stream');
const autoprefixer = require('gulp-autoprefixer');

const entryPoint = './app/app.js',
	browserDir = './app',
	sassWatchPath = './app/styles/**/*.scss',
	jsWatchPath = './app/**/*.js',
	htmlWatchPath = './app/**/*.html';

gulp.task('js', () => {
	return browserify(entryPoint, { debug: true, extensions: ['es6'] })
		.transform('babelify', { presets: ['es2015'] })
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/dist'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', () => {
	const config = {
		server: { baseDir: browserDir }
	};

	return browserSync(config);
});

gulp.task('sass', () => {
	return gulp.src(sassWatchPath)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('.app/styles/css'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', () => {
	gulp.watch(jsWatchPath, ['js']);
	gulp.watch(sassWatchPath, ['sass']);
	gulp.watch(htmlWatchPath, () => {
		return gulp.src('')
			.pipe(browserSync.reload({ stream: true }));
	});
});

gulp.task('run', ['js', 'sass', 'watch', 'browser-sync']);
