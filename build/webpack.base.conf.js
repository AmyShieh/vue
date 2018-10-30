const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
})

module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: "./index.ts",
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
    }),
    new HtmlWebpackPlugin({
      title: "Atlas mobile",
      template: "../index.html",
      inject: true,
    }),
  ],
  // module: {
  //     rules: [
  //         {
  //             test: /\.css$/,
  //             use: [
  //                 "style-loader",
  //                 "css-loader"
  //             ]
  //         },
  //         {
  //             test: /\.scss$/,
  //             use: [
  //                 {loader: "style-loader"},
  //                 {loader: "vue-style-loader"},
  //                 {loader: "css-loader"},
  //                 {
  //                     loader: "sass-loader",
  //                     options: {
  //                         sourceMap: true
  //                     }
  //                 },
  //             ]
  //         },
  //         {
  //             test: /\.(png|svg|jpg|gif|jepg)$/,
  //             use: ["file-loader"]
  //         },
  //         {
  //             test: /\.(woff2?|eot|ttf|otf)$/,
  //             use: ["file-loader"]
  //         },
  //         {
  //             test: /\.vue$/,
  //             loader: 'vue-loader'
  //         }
  //     ]
  // },
  output: {
    filename: "[app].bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
}
