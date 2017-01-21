var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/HelloWorld.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/app', loader: 'babel-loader?presets[]=es2015&presets[]=react'},
      {test: /\.css$/, loader: 'style=loader!css-loader'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
