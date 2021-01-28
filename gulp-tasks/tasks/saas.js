  module.exports = () => {
  G.gulp.task('sass', function () {
    return G.gulp.src('app/static/scss/style.scss')

      .pipe(G.if(G.isDevelopment, G.sourcemaps.init()))

      .pipe(G.csscomb())

      .pipe(G.sass())

      .pipe(G.webpcss({
        webpClass: '',
        noWebpClass: '.no-webp'
      }))
      
      
      .pipe(G.mergeMediaQuery())
     
      .pipe(G.autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))

      .pipe(G.cleanCSS({
        format: G.isDevelopment ? 'beautify' : { breakWith: '' },
        compatibility: 'ie8',
        level: G.isDevelopment ? 0 : 2
      }))


      .pipe(G.rename({ suffix: '.min' }))
      
      .pipe(G.if(G.isDevelopment, G.sourcemaps.write('./')))

      .pipe(G.gulp.dest('dist/css'))

      .pipe(G.browserSync.reload({ stream: true }))
  })
}
