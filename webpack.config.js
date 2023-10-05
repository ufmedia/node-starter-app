const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin'); // Added

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'source-map',
  plugins: [
    new NodemonPlugin()  // Add nodemon plugin here
  ]
};