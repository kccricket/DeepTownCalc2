const NormalModuleReplacementPlugin = require("webpack/lib/NormalModuleReplacementPlugin");

module.exports = {
  baseUrl:
    process.env.NODE_ENV === "production" ? process.env.DEPLOY_URL_ROOT : "/",
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      new NormalModuleReplacementPlugin(
        /element-ui[/\\]lib[/\\]locale[/\\]lang[/\\]zh-CN/,
        "element-ui/lib/locale/lang/en"
      )
    ]
  }
};
