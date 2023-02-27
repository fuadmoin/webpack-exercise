const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      },
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};