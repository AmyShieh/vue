const path = require("path")
// const chalk = require("chalk")

// const ProgressBarPlugin = require("progress-bar-webpack-plugin")

const HappyPack = require("happypack")
const os = require("os")
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

// instead of extract-text-webpack-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

function resolve(dir) {
  return path.join(__dirname, "..", dir)
}

// TODO: change static file's path
function assetsPath(_path_) {
  let assetsSubDirectory = "static"
  return path.posix.join("", _path_)
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    mobile: "./src/index.ts",
  },
  output: {
    path: resolve("dist"),
    filename: "[name].[hash:7].js",
  },
  resolve: {
    extensions: [".js", ".css", ".scss", ".json"],
    alias: {
      "@": resolve("src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "happypack/loader?id=happy-babel-js",
        include: [resolve("src")],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
        include: [resolve("src")],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        include: [resolve("src")],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            name: assetsPath("images/[name].[hash:7].[ext]"),
            limit: 10000,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: assetsPath("fonts/[name].[hash:7].[ext]"),
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HappyPack({
      id: "happy-babel-js",
      loaders: ["babel-loader?cacheDirectory=true"],
      threadPool: happyThreadPool,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:7].css",
      chunkFilename: "[id].css",
    }),
    // new ProgressBarPlugin({
    //   format:
    //     "  build [:bar] " + chalk.green.bold(":percent") + " (:elapsed seconds)"
    // })
  ],
}
