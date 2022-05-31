const { src, dest, parallel, series, watch } = require('gulp');

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const cachebust = require('gulp-cache-bust');
const browsersync = require('browser-sync').create();

function clear() {
    return src('./dist/*', {
        read: false
    })
    .pipe(clean());
}

function js() {
    const source = './src/assets/js/*.js';

    return src(source)
           .pipe(changed(source))
           .pipe(concat('main.js'))
           //.pipe(uglify())
           .pipe(rename({
               extname: '.min.js'
           }))
           .pipe(dest('./dist/assets/js/'))
           .pipe(browsersync.stream());
}

function libs() {
    const source = './src/assets/js/libs/*.js';
 
    return src(source)
           .pipe(changed(source))
           .pipe(concat('libs.js'))
           .pipe(uglify())
           .pipe(rename({
               extname: '.min.js'
           }))
           .pipe(dest('./dist/assets/js/'))
           .pipe(browsersync.stream());
}

function css() {
    const source = './src/assets/sass/*';

    return src(source)
           .pipe(changed(source))
           .pipe(concat('main.css'))
           .pipe(sass())
           .pipe(autoprefixer({
               overrideBrowserList: ['last 2 versions'],
               cascade: false
           }))
           .pipe(cssnano({
                discardComments: { removeAll: true }
            }))
           .pipe(rename({
                extname: '.min.css'
            }))
           .pipe(dest('./dist/assets/css/'))
           .pipe(browsersync.stream());
}

function img() {
    const source = './src/assets/images/*';

    return src(source)
           .pipe(imagemin())
           .pipe(dest('./dist/assets/images/'))
           .pipe(browsersync.stream());
}

function fonts() {
    const source = './src/assets/fonts/*';

    return src(source)
           .pipe(dest('./dist/assets/fonts/'))
           .pipe(browsersync.stream());
}

/*function json() {
    const source = './src/assets/data/*.json';

    return src(source)
           .pipe(dest('./dist/assets/data/'))
           .pipe(browsersync.stream());
}*/

function html() {
    const source = './src/*.html';

    return src(source)
           .pipe(dest('./dist/'))
           .pipe(browsersync.stream());
}

function robotsTxt() {
    const source = './src/robots.txt';

    return src(source)
           .pipe(dest('./dist/'))
           .pipe(browsersync.stream());
}

function cacheBuster() {
    const source = './dist/index.html';

    return src(source)
           .pipe(cachebust())
           .pipe(dest('./dist/'))
           .pipe(browsersync.stream());
}

function browserSync() {
    browsersync.init({
        server: {
            baseDir: "./dist/"
            //directory: true
        },
        port: 3000
    });
}

function watchFiles() {
    watch('./src/assets/sass/*', css);
    watch('./src/assets/js/libs/*', libs);
    watch('./src/assets/js/*', js);
    watch('./src/assets/images/*', img);
    watch('./src/assets/fonts/*', fonts);
    // watch('./src/assets/data/*', json);
    watch('./src/*.html', html);
    watch('./src/robots.txt', robotsTxt);
}

const build = series(clear, parallel(css, libs, js, img, fonts, /*json,*/ html, robotsTxt), cacheBuster);

exports.clear = clear;
exports.watch = series(build, parallel(watchFiles, browserSync));
exports.default = build;