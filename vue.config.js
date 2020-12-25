const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/public"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Giang Engineering";
      return args;
    });
  },
};
