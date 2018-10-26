const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "../src"),
    entry: {
        index: './main.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['../dist']),
        new HtmlWebpackPlugin({
            template: "../index.html",
            title: 'output management'
        })
    ],
    output: {
        filename: '[name].main.js',
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    optimization: {
      splitChunks: {
          chunks: "all"
      }
    },
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test:/\.(png|svg|jpg|gif|jpeg)$/, use: ["file-loader"]},
            {test:/\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"]}
        ]
    }
}