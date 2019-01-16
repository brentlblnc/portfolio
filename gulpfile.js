var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', () =>
        gulp.src('sass/**/*.scss')
        .pipe(sass()
        .pipe(sass({sourcemap: true}))
        .on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
);

gulp.task('default', () => gulp.watch('sass/**/*.scss', gulp.series('styles')));