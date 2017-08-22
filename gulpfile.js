'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

gulp.task('sass', function () {
  return $.rubySass('css/*.scss', {
    sourcemap: true
  })
  .pipe(gulp.dest('./css'));
});

gulp.task('jshint', function() {
  return gulp.src([
      'js/**/*.js'
    ])
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'))
});

gulp.task('connect', function() {
  $.connect.server({
    root: ".",
    livereload: false,
    port: 8080
  });
});
 
gulp.task('html', function () {
  gulp.src('/*.html')
  .pipe($.connect.reload());
});

gulp.task('watch', function () {
  // gulp.watch('css/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['jshint']);
  gulp.watch(['**/*.*'], ['html']);
});
 
// gulp.task('default', ['connect', 'sass', 'watch']); 
gulp.task('default', ['connect', 'watch']);

