var gulp = require('gulp');
var sass = require('gulp-sass');
var data = require('gulp-data');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

//create css file if there is not one already
gulp.task('sass:watch', function () {
    gulp.watch('./css/**/*.scss', ['sass']);
});

function getDataForFile(file) {
  return {
    example: 'data loaded for ' + file.relative
  };
}
gulp.task('nunjucks', function() {
  return gulp.src('./public/templates/pages/*.+(nj)')
  .pipe(data(getDataForFile))
  .pipe(nunjucksRender({
      path: ['public/templates'],
      envOptions: {
        watch: true
      },
    }))
  .pipe(gulp.dest('public'))
});

gulp.task('nunjucks:watch', function () {
    gulp.watch('./public/templates/pages/*.+(nj)', ['nunjucks']);
});
