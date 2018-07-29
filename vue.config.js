module.exports = {
  baseUrl:
    process.env.NODE_ENV === "production" ? process.env.DEPLOY_URL_ROOT : "/",
  configureWebpack: {
    devtool: "source-map"
  }
};
