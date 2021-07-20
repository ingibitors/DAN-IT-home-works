const gulp = require("gulp"),
  clean = require("gulp-clean"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create();

const path = {
  dist: {
    js: "dist/js/",
    style: "dist/css/",
    img: "dist/img/",
    fonts: "dist/fonts/",
  },
  src: {
    js: "src/js/*.js",
    style: "src/scss/**/*.scss",
    img: "src/img/**/*.*",
    fonts: "src/fonts/**/*.*",
  },
  watch: {
    html: "src/index.html",
    js: "src/js/*.js",
    style: "src/scss/**/*.scss",
    img: "src/img/**/*.*",
    fonts: "src/fonts/**/*.*",
  },
  clean: "./dist/",
};

const cleanBuild = () =>
  gulp.src(path.clean, { allowEmpty: true }).pipe(clean());

const scssBuild = () =>
  gulp
    .src(path.src.style, { allowEmpty: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(path.dist.style))
    .pipe(browserSync.stream());

const jsBuild = () =>
  gulp
    .src(path.src.js)
    .pipe(concat("script.js"))
    .pipe(gulp.dest(path.dist.js))
    .pipe(browserSync.stream());

const imgBuild = () =>
  gulp
    .src(path.src.img, { allowEmpty: true })
    .pipe(gulp.dest(path.dist.img))
    .pipe(browserSync.stream());

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch(path.watch.html).on("change", browserSync.reload);
  gulp.watch(path.watch.style, scssBuild).on("change", browserSync.reload);
  gulp.watch(path.watch.js, jsBuild).on("change", browserSync.reload);
  gulp.watch(path.watch.img, imgBuild).on("change", browserSync.reload);
};

gulp.task(
  "default",
  gulp.series(cleanBuild, scssBuild, jsBuild, imgBuild, watcher)
);
