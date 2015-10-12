var gulp 		= require('gulp'),
		json 		= require('./utils/html2json'),
		md			= require('./utils/markdown'),
		extend 	= require('./utils/extend.json'),
		i18n		= require('./utils/html2i18n'),
		rimraf  = require('rimraf'),
		Path		= require('path');


gulp.task('markdown', function () {
	return gulp.src('lang/**/**/*.md')
				.pipe(md())
				.pipe(gulp.dest('dist/lang/'));
});

gulp.task('html2json', function(){
	return gulp.src('dist/lang/**/**/**/*.html')
				.pipe(json())
				.pipe(gulp.dest('dist/json/lang'));
});

gulp.task('extend', ['markdown','html2json'],function(){
	return extend(Path.join(__dirname, 'dist/json/lang'), Path.join(__dirname, 'dist/json/'));
});

gulp.task('html2i18n', ['html2json'], function(){
	return gulp.src('dist/lang/en-us/*.html')
		.pipe(i18n())
		.pipe(gulp.dest('dist/html'));
});

gulp.task('clean:html', ['html2i18n'],function (cb) {
	rimraf('dist/lang',cb);
});

gulp.task('clean:json', ['html2i18n'],function (cb) {
	rimraf('dist/json/lang',cb);
});

gulp.task('default', ['markdown', 'html2json', 'extend', 'html2i18n', 'clean:json', 'clean:html']);