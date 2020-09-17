module.exports = {
  html        : false,
  images      : true,
  fonts       : true,
  static      : false,
  svgSprite   : true,
  ghPages     : false,
  stylesheets : {
    autoprefixer: {
      browsers: "last 2 versions, > 5% in GB, ie >= 10, Safari >= 8"
    }
  },

  javascripts: {
      entry: {
        app: ["babel-polyfill", "./app.js"],
      }
    },

  svgSprite: {
    svgstore: {
      inlineSvg: true
    }
  },

  browserSync: {
    proxy: 'http://metro.test',
    path: 'app/themes/metro/assets',
    files: ['themes/metro/assets']
  },

  production: {
    rev: false
  }
}
