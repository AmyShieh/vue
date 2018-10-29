const path = require("path")

// const CopyWebpackPlugin = require("copy-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const baseConfig = require("./webpack.base")
const merge = require("webpack-merge")

const glob = require("glob")
const PurifyCSSPlugin = require("purifycss-webpack")
const WebpackParallelUglifyPlugin = require("webpack-parallel-uglify-plugin")
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = merge(baseConfig, {
  output: {
    publicPath: "./"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "index.html"),
      filename: "index.html",
      chunks: ["mobile", "common"],
      vendor: "./vendor.dll.js",
      hash: true,
      minify: {
        removeAttributeQuotes: true
      }
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.join(__dirname, "..", "static"),
    //     to: path.join(__dirname, "..", "dist", "static"),
    //     ignore: [".*"]
    //   }
    // ]),
    new CleanWebpackPlugin(["dist"], {
      root: path.join(__dirname, ".."),
      exclude: ["manifest.json", "vendor.dll.js"],
      verbose: true,
      dry: false
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: true }
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, "../src/*.html"))
    }),
    new WebpackParallelUglifyPlugin({
      uglifyJS: {
        output: {
          beautify: false,
          comments: false
        },
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true
        }
      }
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, "..", "dist", "manifest.json")
    })
  ]
})
