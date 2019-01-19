var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var concatCss = require('gulp-concat-css');
var csso = require('gulp-csso');

// Static Server
gulp.task("serve", function () {
  browserSync.init({
    port: 9000,
    server: "./"
  });

  gulp.watch("src/assets/sass/**/**/*.scss", ["sass"]);
  gulp.watch("./**/*.html").on("change", browserSync.reload);
});

// Dev Design System
gulp.task("sass", function () {
  return gulp
    .src("src/assets/sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concatCss("design-system.min.css"))
    .pipe(csso({
      sourceMap: true,
      debug: true
    }))
    .pipe(gulp.dest("src/assets/"))
    .pipe(browserSync.stream());
});

// Build Design System
gulp.task("build", function () {
  return gulp
    .src("src/assets/sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concatCss("design-system.min.css"))
    .pipe(csso({
      sourceMap: true,
      debug: true
    }))
    .pipe(gulp.dest("src/assets/"))
});

gulp.task("default", ["sass", "build", "serve"]);
