var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  // resolve TypeScript and Vue file
  resolve: {
      extensions: ['', '.ts', '.vue', '.js']
  },

  module: {
      loaders: [
          { test: /\.vue$/, loader: 'vue' },
          { test: /\.ts$/, loader: 'vue-ts' }
      ],
  },
  vue: {
    // instruct vue-loader to load TypeScript
    loaders: { js: 'vue-ts-loader', },
    // make TS' generated code cooperate with vue-loader
    esModule: true
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },
  devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
