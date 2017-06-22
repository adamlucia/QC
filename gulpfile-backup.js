var gulp = require('gulp');
var sass = require('gulp-sass');
var data = require('gulp-data');
var nunjucks = require('gulp-nunjucks');
var watch = require('gulp-watch');
const util = require('util');

gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

//create css file if there is not one already
gulp.task('sass:watch', function () {
    gulp.watch('./css/**/*.scss', ['sass']);
});


gulp.task('nunjucks:watch', function() {
  return watch(['./public/templates/**/*.+(nj)'])
  .pipe(data((file) => {
      //console.log('file', file.path);
      //console.log('test', Object.keys(file));
      if(file.path.indexOf('pages') > -1){
          console.log('file', file);
          //return file;
      }
  }))
  .pipe(nunjucks.precompile())
  .pipe(gulp.dest('public'))
});
gulp.task('nunjucks', function() {
  return gulp.src(['./public/templates/**/*.+(nj)'])
  .pipe(nunjucks.compile())
  .pipe(gulp.dest('public'))
});
