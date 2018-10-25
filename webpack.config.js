const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app:"./src/index.js",
        print: "./src/print.js"
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./ind.html",
            title: 'output management'
        })
    ],
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test:/\.(png|svg|jpg|gif|jpeg)$/, use: ["file-loader"]},
            {test:/\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"]}
        ]
    }
}