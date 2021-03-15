const { series, parallel } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function tranformacaoCSS() {
  return gulp
    .src("src/sass/index.scss")
    .pipe(sass().on("erro", sass.logError))
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(concat("estilo.min.css"))
    .pipe(gulp.dest("build/css"));
}

function copiar() {
 return gulp.src("src/*.html").pipe(gulp.dest("build"));
}

exports.default = parallel(tranformacaoCSS, copiar);
