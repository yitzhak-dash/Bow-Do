const gulp = require('gulp');
const ts = require('gulp-typescript');
const tslint = require("gulp-tslint");
const nodemon = require('gulp-nodemon');
const runSequence = require("run-sequence");
//
const JSON_FILES = ['./src/*.json', './src/**/*.json'];

gulp.task('default', function (cb) {
    runSequence("tslint", "build", cb);
});

// TypeScript build for /src folder
const tsProject = ts.createProject('tsconfig.json');
gulp.task('build', function () {
    let tsResult = gulp.src("./src/**/*.ts") // or tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task("tslint", () =>
    gulp.src("./src/**/*.ts")
        .pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report({
            emitError: true,
            summarizeFailureOutput: true
        }))
);

gulp.task('watch', ['build'], () => {
    gulp.watch('src/**/*.ts', ['build']);
});


gulp.task('develop', function () {
    const stream = nodemon({
        script: 'dist/index.js',
        ext: 'ts json',
        watch: 'src/',
        ignore: ['node_modules/'],
        tasks: ['tslint', 'build']
    });

    stream.on('restart', function () {
        console.log('restarted!')
    }).on('crash', function () {
        console.error('Application has crashed!\n');
        stream.emit('restart', 10)  // restart the server in 10 seconds
    })
});

gulp.task('assets', function () {
    return gulp.src(JSON_FILES)
        .pipe(gulp.dest('dist'));
});
