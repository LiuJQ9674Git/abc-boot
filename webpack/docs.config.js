import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ip from 'ip';
import path from 'path';
import webpack from 'webpack';

import baseConfig, { options, jsLoader } from './base.config';

const webpackDevServerAddress = `http://${ip.address()}:${options.port}`;
const cssSourceMap = options.debug ? '?sourceMap' : '';
const reactHot = options.debug ? 'react-hot!' : '';

const entryFile = './react-bootstrap-getting-started/src/App.js';
//entry: './react-bootstrap-getting-started/src/App.js',
const entryCommehtsFile = './public/assets/js/demo/comments/entry.js';
//entry: './public/assets/js/demo/comments/entry.js',
const entryAngularDemoFile = './public/assets/js/demo/angularwebpack/index.js';

const devEntryBundle = [
  'webpack/hot/dev-server',
  `webpack-dev-server/client?${webpackDevServerAddress}`,
  entryCommehtsFile,
];

baseConfig.plugins.push(new ExtractTextPlugin('[name].css'));
if (options.debug) {
  baseConfig.plugins.push(new webpack.NoErrorsPlugin());
}

export default {
  ...baseConfig,

  devtool: options.debug ? 'source-map' : null,



  entry: {
    bundle: options.debug ? devEntryBundle : entryFile,
    commentsbundle:options.debug ? devEntryBundle : entryCommehtsFile,
    angulardemobundle:entryAngularDemoFile
  },

  output: {
    filename: '[name].js',
    path: './build',
    //publicPath: options.debug ? `${webpackDevServerAddress}/build/` : '/build/',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      { test: /\.js/, loader: `${reactHot}${jsLoader}`, exclude: /node_modules|Samples\.js/ },
      { test: /Samples.js/, loader: `${reactHot}transform?brfs!${jsLoader}` },
      { test: /\.css/,
        loader: ExtractTextPlugin.extract('style', `css${cssSourceMap}`) },
      { test: /\.less$/,
          loader: ExtractTextPlugin.extract('style', `css${cssSourceMap}!less${cssSourceMap}`) },
      { test: /\.json$/, loader: 'json' },
      { test: /\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'file?name=[name].[ext]' },
      { test: /\.eot$|\.ttf$|\.svg$|\.woff2?$/, loader: 'file?name=[name].[ext]' },
    ],
  },
};
