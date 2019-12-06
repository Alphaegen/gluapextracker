const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../public"),
  devServer: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:5000"
      }
    }
  },

  pwa: {
    name: "GLU Apex Tracker",
    short_name: "GAT",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    icons: [
      {
        src: "assets/logo.png",
        sizes: "192x192",
        type: "image/png"
      }
    ]
  }
};
