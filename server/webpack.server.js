const path = require('path');
const merge = require('webpack-merge');
const wepackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

const config = {
  // Inform webpack that we are building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [wepackNodeExternals()],
};

module.exports = merge(baseConfig, config);
