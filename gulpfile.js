global.G = {
  // common gulp
  isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV == 'development',
  gulp: require('gulp'),
  gulpLoadPlugins: require('gulp-load-plugins')(),
  config: {
    src: require('./gulp-tasks/config/src.js')
  },

  changed: require('gulp-changed'),
  if: require('gulp-if'),
  filter: require('gulp-filter'),
  rename: require('gulp-rename'),
  browserSync: require('browser-sync'),
  del: require('del'),
  path: require('path'),
  // scss or sass or stylus
  sass: require('gulp-sass'),
  autoprefixer: require('gulp-autoprefixer'),
  cssmin: require('gulp-cssmin'),
  csscomb: require('gulp-csscomb'),
  cleanCSS: require('gulp-clean-css'),
  sourcemaps: require('gulp-sourcemaps'),
  concat: require('gulp-concat'),
  mergeMediaQuery: require('gulp-group-css-media-queries'),
  criticalCss: require('critical').stream,
  // webpack only js 
  webpack: require('webpack-stream'),
  terserPlugin: require('terser-webpack-plugin'),
  // images
  responsive: require('gulp-responsive'),
  imagemin: require('gulp-imagemin'),
  imageminPngquant: require('imagemin-pngquant'),
  imageminMozjpeg: require('imagemin-mozjpeg'),
  webpcss: require('gulp-webpcss'),
  spriteSmith: require('gulp.spritesmith'),
  webp: require('gulp-webp'),
  // SVG
  spriteSvg: require('gulp-svg-sprite'),
  svgMin: require('gulp-svgmin'),
  // iconFont 
  iconFont: require('gulp-iconfont'),
  iconFontCss: require('gulp-iconfont-css'),
}

G.config.src.forEach(task => {
  require(task)()
})

G.gulp.task('images', G.gulp.series(
  'clean:images',
  'favicon',
  'content',
  'icon',
  'iconFont'
))


G.gulp.task('default', G.gulp.series(
  'export',
  'styleLibs',
  'sass',
  'html',
  G.gulp.parallel(
    'sass',
    'html',
    'browser-sync',
    'webpackJs',
    'images',
    'watch'
  )
))

G.gulp.task('build', G.gulp.series(
  'clean',
  'export',
  'images',
  'styleLibs',
  'sass',
  'html',
  'webpackJs',
))
