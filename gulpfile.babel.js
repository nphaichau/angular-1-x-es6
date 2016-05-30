"use strict";

import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import minifyCss from 'gulp-minify-css';
import uglify from 'gulp-uglify';
import del from 'del';
import rename from 'gulp-rename';
import jsHint from 'gulp-jshint';
import plumber from 'gulp-plumber';
import babel from "gulp-babel";
import html2js from 'gulp-html2js';
import usemin from 'gulp-usemin';
import rev from 'gulp-rev';
import watch from 'gulp-watch';
import batch from 'gulp-batch';
import ngAnnotate from 'gulp-ng-annotate';

let paths = {
  scripts: [''],
  images: 'app/assets/images/**/*',
  styles: ['app/**/*.css']
};

gulp.task('delete', function() {
  del(['dist/*'], function(err) {
    console.log("Files deleted!");
  });
});

gulp.task('copy-resource', function() {
  console.log("Will be implemented later");
});

gulp.task('build', ['delete', 'html2js', 'compile', 'copy-resource'], function() {
  return gulp
    .src('index.html')
    .pipe(usemin({
      css: [minifyCss(), rev()],
      js: [ngAnnotate(), uglify(), jsHint(), rev()]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('delete-bundle', function() {
  del(['app/app.bundle.js'], function(err) {
    console.log("Bundle file deleted!");
  });
});

gulp.task('compile', ['delete-bundle'], function() {
  return browserify('app/application.js')
    .transform('babelify')
    .bundle()
    .pipe(source('app.bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('app'));
});

gulp.task('html2js', function () {
    gulp.src('app/**/*.tpl.html')
        .pipe(html2js('templates.js', {name: "app-html-templates"}))
        .pipe(gulp.dest('temp/'));
});

gulp.task('watch', function () {
    watch(['app/**/*.js', '!app/app.bundle.js'], batch(function (events, done) {
        gulp.start('compile', done);
    }));
});

gulp.task('default', ['delete', 'style', 'script']);
