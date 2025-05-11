const { merge } = require("webpack-merge");
// import {merge} from ("webpack-mege")
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});
