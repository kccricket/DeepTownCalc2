const webpack = require("webpack");

module.exports = {
  baseUrl:
    process.env.NODE_ENV === "production" ? process.env.DEPLOY_URL_ROOT : "/",
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      new webpack.NormalModuleReplacementPlugin(
        /element-ui[/\\]lib[/\\]locale[/\\]lang[/\\]zh-CN/,
        "element-ui/lib/locale/lang/en"
      )
    ]
  }
};
