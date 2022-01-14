const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = "vue Element Admin"; // page title

module.exports = {
  configureWebpack: {
    name: name,
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/base/icon")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/base/icon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
