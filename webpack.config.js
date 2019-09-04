var path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  mode: "development",

  watch: true,

  devtool: "source-map",

  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, "dist")
  }
};
