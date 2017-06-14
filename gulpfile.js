var gulp = require('gulp');
var sass = require('gulp-sass');
var render = require('gulp-nunjucks-render');

gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

//create css file if there is not one already
gulp.task('sass:watch', function () {
    gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('nunjucks', function() {
  return gulp.src('./**/*.+(nj)')
  .pipe(render({
      path: ['./templates']
    }))
  .pipe(gulp.dest('public'))
});
