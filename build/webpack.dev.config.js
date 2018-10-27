const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const baseConfig = require("./webpack.base")
const merge = require("webpack-merge")
const proxyOptions = require("./proxy.config")
const fs = require("fs")

fs.watchFile(path.resolve(__dirname, "./proxy.config.js"), () => {
  delete require.cache[require.resolve("./proxy.config")]
  try {
    const newProxyConfig = require("./proxy.config")
    if (proxyOptions.target !== newProxyConfig.target) {
      console.log(
        "Proxy target changed, now api proxy to: ",
        newProxyConfig.target
      )
      proxyOptions = newProxyConfig
    }
  } catch (e) {
    console.error("hot replace proxy fail")
  }
})

const devWebpackConfig = merge(baseConfig, {
  output: {
    publicPath: "/"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    stats: "normal",
    hot: true,
    contentBase: path.join(__dirname, "..", "dist"), // static file root path
    port: 2333,
    host: "localhost",
    overlay: true, // shows a full-screen overlay in the browser when there are compiler errors or warnings
    compress: true, // enable gzip compression
    historyApiFallback: true,
    proxy: [() => proxyOptions]
  },
  // watchOptions: {
  //   ignored: /node_modules/, //忽略不用监听变更的目录
  //   aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
  //   poll: 1000 //每秒询问的文件变更的次数
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "index.html"),
      filename: "index.html",
      chunks: ["index", "common"],
      vendor: "./vendor.dll.js", // align with dll config
      hash: true,
      minify: {
        removeAttributeQuotes: true
      }
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, "..", "dist", "manifest.json")
    }),
    new webpack.HotModuleReplacementPlugin(), //HMR
    new webpack.NamedModulesPlugin() // HMR
  ]
})

module.exports = devWebpackConfig
