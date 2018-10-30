const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const base = require("webpack.base.conf")

module.exports = merge(base, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new VueLoaderPlugin()],
})
