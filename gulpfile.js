var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('pug', function () {
  return gulp.src(['./*.pug', '!./_*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'));
});

gulp.task('build', ['pug', 'sass']);

gulp.task('watch', function () {
  gulp.watch(['./*.pug', './scss/*.scss'], ['pug', 'sass']);
});

gulp.task('default', ['build', 'watch']);
