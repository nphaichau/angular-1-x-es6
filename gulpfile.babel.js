"use strict";

import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import cleanCss from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import del from 'del';
import rename from 'gulp-rename';
import jsHint from 'gulp-jshint';
import plumber from 'gulp-plumber';
import babel from "gulp-babel";

let paths = {
  scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  images: 'app/assets/images/**/*',
  styles: ['']
};

gulp.task('delete', function() {
  del(['dist/*'], function(err) {
    console.log("Files deleted!");
  });
});

gulp.task('delete-bundle', function() {
  del(['app/app.bundle.js'], function(err) {
    console.log("Bundle file deleted!");
  });
});

gulp.task('style', function() {
  return gulp
    .src('css/style.css')
    .pipe(cleanCss())
    .pipe(rename({'suffix': '.min'}))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('compile', ['delete-bundle'], function() {
  return browserify('app/application.js')
    .transform('babelify')
    .bundle()
    .pipe(source('app.bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('app'));
  /*return gulp
    .src('js/script.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(uglify())
    .pipe(jsHint())
    .pipe(rename({'suffix': '.min'}))
    .pipe(gulp.dest('assets'));*/
});

gulp.task('default', ['delete', 'style', 'script']);
