const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 entry: {
     index: "/src/index.tsx"
 },
 output: {
   path: path.join(__dirname, '/dist/js'),
   filename: '[name].js'
 },
 resolve: {
  extensions: ['.ts', '.tsx', '.js']
},

  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx|ts|tsx)$/,
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