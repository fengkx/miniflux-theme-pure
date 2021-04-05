const gulp = require("gulp");
const postcss = require("gulp-postcss");
const clone = require("gulp-clone");
const cleancss = require("gulp-cleancss");
const rename = require("gulp-rename");

gulp.task("css", () => {
  const src = gulp
    .src("src/**/*.css")
    .pipe(
      postcss([
        require("postcss-import"),
        require("tailwindcss"),
        require("postcss-nested"),
        require("autoprefixer"),
      ])
    );

  const cloned = src.pipe(clone());
  src.pipe(gulp.dest("dist"));

  return cloned
    .pipe(cleancss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", () => {
  gulp.watch("src/**", gulp.parallel("css"));
});
gulp.task("default", gulp.parallel("css"));
