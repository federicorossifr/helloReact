const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 entry: {
     index: "/src/index.js"
 },
 output: {
   path: path.join(__dirname, '/dist/js'),
   filename: '[name].js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   allowedHosts: [ 'virtual-server'],
   port: 3000,
   static: [
    {directory: path.join(__dirname, 'public'), publicPath:"/",watch: true,},
    {directory: path.join(__dirname, 'dist'), publicPath:"/dist"},
   ]
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 }
}
