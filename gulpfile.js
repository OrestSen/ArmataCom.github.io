var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS     = require('gulp-clean-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify-es').default;


		var gulp        = require('gulp');
		var deploy      = require('gulp-gh-pages');
		
		/**
		 * Push build to gh-pages
		 */
		gulp.task('deploy', function () {
		  return gulp.src("./**/*")
			.pipe(deploy())
		});


gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
		notify: false,
		// online: false, // Work offline without internet connection
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	})
});
function bsReload(done) { browserSync.reload(); done() };

gulp.task('styles', function () {
	return gulp.src('sass/**/*.sass')
	.pipe(sass({
		outputStyle: 'expanded',
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : '_'}))
	.pipe(autoprefixer({
		// grid: true, // Optional. Enable CSS Grid
		overrideBrowserslist: ['last 10 versions']
	}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'libs/modernizr/modernizr.js',
		'libs/jquery/jquery-1.11.2.min.js',
		'libs/waypoints/waypoints.min.js',
		'libs/animate/animate-css.js',
		])
		.pipe(concat('libs.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('js/'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('code', function() {
	return gulp.src('**/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('watch', function () {
	gulp.watch('sass/**/*.sass', gulp.parallel('styles'));
	gulp.watch(['js/common.js', 'libs/**/*.js'], gulp.parallel('scripts'));
	gulp.watch('*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));
