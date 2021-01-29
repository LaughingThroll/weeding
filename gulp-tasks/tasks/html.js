 module.exports = () => {
  G.gulp.task('html', function () {
    return G.gulp.src('app/**/*.html')
      .pipe(G.filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
            // Here no understand why fonts without quoutes 
      .pipe(G.if(!G.isDevelopment ,G.criticalCss({
        inline: true,
        base: 'dist/',
        css: ['dist/css/style.min.css', 'dist/css/libs.min.css'],
        extract: false,
        minify: false
      })))

      .pipe(G.gulp.dest('dist'))
      .pipe(G.browserSync.reload({ stream: true }))
  })
}