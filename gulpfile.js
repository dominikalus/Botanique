const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');

function showErrors(err) {
    console.log(gutil.colors.red(err.toString() ));
    this.emit('end');
}

gulp.task('sass', function () {
    return gulp.src('./scss/main.scss') //wez z katalogu scss wszystkie pliki scss, **(i podkatalogach)
        .pipe(plumber({
            errorHandler : showErrors
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle : "compressed"
        })) //skompiluj je
        .pipe(autoprefixer({                //ta linijka MUSI byc dodana po kompilacji
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))  //do katalogu css

});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', function(){
    console.log('-----start pracy-----');
    gulp.start(['sass', 'watch']);
})