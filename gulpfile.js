const gulp = require('gulp');
const sass = require ('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(gulp.dest('./build/pills'));
}

function compilaSass() {
    return  gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

function dizOi(callback){
    console.log("olá Gulp");
    dizTchau();
    callback();
}

function dizTchau() {
    console.log("tchau Gulp");
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;
exports.sass = compilaSass
exports.watch = function() {
    gulp.watch('./source.styles/*.scss', {ignoreInitial:false}, gulp.series(compilaSass));
}
exports.javascript = comprimeJavaScript;