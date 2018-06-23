const path = require('path');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const CompressionPlugin = require('compression-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env) => {
  const isProduction = env === 'production';
  console.log('env',env);
  //const CSSExtract = new ExtractTextPlugin('styles.css');
 
  return {
  //entry: './src/playground/redux-expensify.js',
  //entry: './src/playground/destructuring.js',
    //plugins: [
    //new BundleAnalyzerPlugin(),
    //new CompressionPlugin({
    //algorithm: 'gzip'
    //}),
    //CSSExtract
  //],
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
     use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },{
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }
	]
  },
  devtool: isProduction ? 'source-map' :'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
};
