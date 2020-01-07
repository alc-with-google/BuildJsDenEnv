import path from 'path';
import webpack from "webpack";

export default {
  debug: true,
  devtool: 'source-map', // recommeded for productiom, this specifes how source would be generated; so we can original code even after minificatuion
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), // where to write the output.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    //Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    //Minify JS
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
};
