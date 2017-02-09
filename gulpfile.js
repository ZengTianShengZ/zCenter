/**
 * Created by bong on 2017/2/9.
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/scss/zCenter.scss')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(autoprefixer({
            cascade: false,
            remove:false
        }))
        .pipe(gulp.dest('src/css'));
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/js/*.js");
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('dev',['serve']);