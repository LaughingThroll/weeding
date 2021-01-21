 module.exports = () => {
  G.gulp.task('watch', function () {

  global.isWatching = true

  G.gulp.watch('app/**/*.scss', G.gulp.parallel('sass'))
  G.gulp.watch('app/**/*.html', G.gulp.parallel('html'))
  
  G.gulp.watch(['app/**/*.js', '!app/js/*.min.js'], G.gulp.series('clean:js', 'webpackJs'))
  G.gulp.watch('app/static/images/favicon/**/*.{ico,png}', G.gulp.parallel('favicon'))
  G.gulp.watch('app/static/images/content/**/*.{jpeg,png,jpg,webp,svg}', G.gulp.series('content'))
  G.gulp.watch('app/static/images/iconFont/**/*.svg', G.gulp.series('iconFont'))
  G.gulp.watch('app/static/images/icons/**/*.{png,svg}', G.gulp.series('icon'))

  })
}