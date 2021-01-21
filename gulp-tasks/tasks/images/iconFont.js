module.exports = () => {
  G.gulp.task('iconFont', function () {
    return G.gulp.src('app/static/images/iconFont/**/*.svg')
      .pipe(G.iconFontCss({
        targetPath: '../../app/static/scss/utils/_icons.scss',
        fontPath: '../fonts/',
        fontName: 'icon'
      }))
      .pipe(G.iconFont({
        fontName: 'icon',
        formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
        normalize: true,
        fontHeight: 1001
      }))
      .pipe(G.gulp.dest('dist/fonts'))
  })
}