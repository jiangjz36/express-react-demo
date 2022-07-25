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
      extensions: ['.js', '.jsx', '.css'],
      alias: {
        '@': path.resolve(__dirname)
      }
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
        }, {
          test: /\.css$/,
          use: [
            'isomorphic-style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[path][name]__[local]--[hash:base64:5]"
                }
                
              }
            },
            'postcss-loader'
          ]
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
      extensions: ['.js', '.jsx', '.css'],
      alias: {
        '@': path.resolve(__dirname)
      }
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
        }, {
          test: /\.css$/,
          exclude: /node_modules[\\/]codemirror/,
          use: [
            'isomorphic-style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[path][name]__[local]--[hash:base64:5]"
                }
              }
            },
            'postcss-loader'
          ]
        }
      ]
    }
    }
]