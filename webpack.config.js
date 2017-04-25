const webpack = require('webpack')
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProd = (process.env.NODE_ENV === 'production');
const isDev = (process.env.NODE_ENV === 'development');

var config = {
  entry: ['./_entry.js'],
  output: {
    path: __dirname + '/_static/'
    ,filename: 'js/app.js'
  },
  watch: true,
  module: {
    rules: [
      {test: /\.html$/,use: 'html-loader'},
      {test: /\.hbs$/,use: 'handlebars-loader'},
      {test: /\.(jpe?g|png|gif|svg)$/i,use: 'file-loader'} //this allows project to load images from css
    ]
  },
  plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new ExtractTextPlugin({
        filename: 'css/style.css'
        ,allChunks: true
      }),
      new CopyWebpackPlugin([{from: 'src/img', to: 'img'}]), //cleanest just to copy over images
      
      //PAGES: default is index so no need to specify, but it becomes some weird orphan if not explicit
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/views/pages/_rootProjectPage.hbs'
      }),
      new HtmlWebpackPlugin({
        filename: 'homepage.html'
        ,template: 'src/views/pages/homepage.hbs'
      }),
      new HtmlWebpackPlugin({
        filename: 'compiled_1.html'
        ,template: 'src/views/pages/test_page_1.hbs'
      }),
      new HtmlWebpackPlugin({
        filename: 'compiled_2.html'
        ,template: 'src/views/pages/test_page_2.hbs'
      }),
      new HtmlWebpackPlugin({
        filename: '_patternLibrary_compiled.html'
        ,template: 'src/views/pages/_patternLibrary.hbs'
      })
   ]
};

if (isDev) {
  config.devtool = 'eval';
  config.devServer = {
      port: 8080 //even thought this is default, need to make explicit to access it
  };
  config.plugins.push(
    new LiveReloadPlugin({appendScriptTag: true})
   ,new UglifyJSPlugin({})
  );
  config.module.rules.push(
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        'babel-loader?presets[]=es2015'
        ,'eslint-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
          use: [
            'css-loader'
            ,'postcss-loader?sourceMap=inline' //postcss config in own file
            ,'sass-loader?sourceMap'
          ]
      })
    }
  );
  let address,ifaces = require('os').networkInterfaces();for(let dev in ifaces){ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);}
  console.log(`¯\_(ツ)_/¯ Site is available at this IP address: ${address}:${config.devServer.port} ¯\_(ツ)_/¯`);
}

if (isProd) {
  config.devtool = 'source-map';
  config.plugins.push(
    new UglifyJSPlugin({
        mangle: true
      })
  );
  config.module.rules.push(
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader?presets[]=es2015']
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
          use: [
            'css-loader?sourceMap'
            ,'postcss-loader?sourceMap' //postcss config in own file
            ,'sass-loader?sourceMap'
          ]
      })
    }
  );
}

console.log(`¯\_(ツ)_/¯ node environment is ${process.env.NODE_ENV} ¯\_(ツ)_/¯`);

module.exports = config;