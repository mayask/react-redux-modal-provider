const path = require('path');

const reactReduxModalProviderSrc = path.resolve(__dirname, '../src')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [ __dirname, reactReduxModalProviderSrc ],
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: { 'react-redux-modal-provider': reactReduxModalProviderSrc }
  }
};
