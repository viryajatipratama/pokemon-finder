const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require("path");
 
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 8080,
    liveReload: true                             
  },
})