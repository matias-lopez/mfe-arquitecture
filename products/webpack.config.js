const htmlWebpackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { devServer } = require("../products/webpack.config");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new moduleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index",
      },
    }),
    new htmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
