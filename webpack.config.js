const path = require('path');
let nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const objectModule = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    }
  ]
};
// Define client entry
const client = {
  entry: {
    "client": "./src/client/index.js"
  },
  target: "web",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/dist")
  },
  module: objectModule,
  // Add plugins
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/client/index.html"
    })
  ]
};

const server = {
  entry: {
    "server": "./src/server/server.js"
  },
  target: "node",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: objectModule,
    externals: [nodeExternals()]
};
module.exports = [client, server];