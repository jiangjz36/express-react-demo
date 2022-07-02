const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = [
  {
    target: 'node',
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    externals: [webpackNodeExternals()],
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: {browsers: ['last 2 versions']} }],
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-function-bind'
              ]
            }
          }
        }
      ]
    }
  }, {
    mode: 'development',
    entry: './src/client.js',
    output: {
      path: `${__dirname}/public`,
      filename: 'index.js'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: {browsers: ['last 2 versions']} }],
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-proposal-function-bind'
              ]
            }
          }
        }
      ]
    }
    }
]