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
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      'vue$': 'vue/dist/vue.common.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: { js: 'ts-loader', },
          esModule: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      }
    ],
  },
  performance: {
    hints: false
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#cheap-eval-source-map',
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
  ])
}
