/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/index.ts"],
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
    "@material-ui/core": {
      root: "MaterialUI",
      commonjs: "@material-ui/core",
      commonjs2: "@material-ui/core",
      amd: "@material-ui/core",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".tsx", ".ts"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
};
