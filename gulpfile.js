const gulp        = require('gulp');
const browserSync = require('browser-sync');
const less        = require('gulp-less');
const path        = require('path');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist",
            directory: true
        }
    });

    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/less/**/*.less")
        .pipe(less({
            paths: [path.join(__dirname, 'includes')]
        }))
        .pipe(rename({prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/less/**/*.+(less)", gulp.parallel('styles'));
    gulp.watch("src/*.pug").on("change", browserSync.reload);
    gulp.watch('src/**/*.pug', gulp.parallel('pug'))
    gulp.watch("src/script/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/img/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/img/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/img/content/**/*").on('all', gulp.parallel('images'));
});

gulp.task('pug', function() {
    return gulp.src('src/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'))
    });

gulp.task('scripts', function () {
    return gulp.src("src/script/**/*.js")
        .pipe(gulp.dest("dist/script"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("src/img/icons/**/*")
        .pipe(gulp.dest("dist/img/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/img/content/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img/content"))
        .pipe(browserSync.stream());
});

gulp.task('fav', function () {
    return gulp.src("src/img/fav/**/*")
        .pipe(gulp.dest("dist/img/fav"))
        .pipe(browserSync.stream());
});


gulp.task('default', gulp.parallel('server', 'styles', 'watch', 'pug', 'scripts', 'fonts', 'icons', 'images', 'fav'));