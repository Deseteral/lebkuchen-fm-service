const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageJson = require(path.resolve(__dirname, 'package.json')); // eslint-disable-line import/no-dynamic-require

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'production';
const IS_DEV_MODE = process.env.NODE_ENV === 'development';

const ENTRY_POINT_PATH = path.resolve(__dirname, 'src', 'index.tsx');
const INDEX_HTML_ENTRY_PATH = path.resolve(__dirname, 'public', 'index.html')
const BUILD_PATH = path.resolve(__dirname, 'dist');

const APP_NAME = `${packageJson.name} v${packageJson.version}`;
const BUNDLE_NAME = `${APP_NAME.split(' ').join('_')}.js`;

module.exports = {
  mode: IS_DEV_MODE ? 'development' : 'production',
  devtool: IS_DEV_MODE ? 'inline-source-map' : undefined,

  entry: ENTRY_POINT_PATH,

  output: {
    filename: BUNDLE_NAME,
    path: BUILD_PATH,
  },

  devServer: IS_DEV_MODE
    ? { contentBase: BUILD_PATH, stats: 'errors-only', compress: true, port: 9000 }
    : undefined,

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: APP_NAME,
      template: INDEX_HTML_ENTRY_PATH,
    }),
  ],
};
