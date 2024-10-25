const htmlWebpackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { devServer } = require("../products/webpack.config");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new moduleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index",
      },
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
