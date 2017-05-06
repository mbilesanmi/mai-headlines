const DotEnvPlugin = require('dotenv-webpack');

const dotEnvPlugin = new DotEnvPlugin({
  path: './.env',
});

module.exports = {
  entry: './app/App.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {},
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    dotEnvPlugin
  ],
  node: {
    fs: 'empty'
  }
};
