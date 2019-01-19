var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', () =>
        gulp.src('src/sass/**/*.scss')
        .pipe(sass()
        .pipe(sass({sourcemap: true}))
        .on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'))
);

gulp.task('default', () => gulp.watch('src/sass/**/*.scss', gulp.series('styles')));