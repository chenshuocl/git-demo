/**
 * Created by cs on 2017/1/16.
 */
'use strict'

var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

gulp.task('style', function (){
    gulp.src('src/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'))
}

);
gulp.task('dist',function(){
    gulp.watch('src/*.less',['style']);
});

var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});