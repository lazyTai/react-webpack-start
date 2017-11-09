var gulp = require('gulp');


/* js */
gulp.task('build', function (callback) {
    require('webpack')(
        require('./webpack.config.pro.js'), function (err, stats) {
            require('./lib/logger')(err, stats)
            callback();
        }
    )
});



// 清理
gulp.task('clean', function () {
    return gulp.src(['dist'], { read: false })
        .pipe(require('gulp-clean')());
});

// 预设任务
gulp.task('default', ['clean'], function () {
    gulp.start('js');
});

gulp.task('watch', ['clean'], function () {
    // 看守所有.js档
    require('webpack')(
        require('./webpack.config.dev.js'))
        .watch(200, function (err, stats) {
            require('./lib/logger')(err, stats)
            console.log("=====webpack finish===")
        });
});