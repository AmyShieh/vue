const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
const extractText = require('extract-text-webpack-plugin');
var website = {
    publicPath:"http://localhost:7190/"
};
module.exports = {
    // 入口文件配置项
    entry: {
        app:'./src/app.js'
    },
    // 出口文件配置项
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        // publicPath: website.publicPath
    },
    // 模块引入
    module: {
        rules: [
            {
                test:/\.css$/,
                use:extractText.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },{
                test:/\.(png|jpg|gif)/,
                use:['url-loader']
            }
        ]
    },
    // 插件,用于生产模板和各项功能
    plugins: [
        new htmlPlugin({
            minify: {
                removeAttributeQutes: true
            },
            hash: true,
            template:'./src/index.html'
        }),
        new extractText('css/base.css')
        // new uglify()
    ],
    // 开发服务功能
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        compress:true,
        port:1017,
        host:"localhost"
    }
}