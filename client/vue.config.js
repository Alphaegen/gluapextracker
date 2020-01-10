const path = require('path');

module.exports = {
  filenameHashing: false,
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:5000'
      }
    }
  },

  pwa: {
    name: 'GLU Apex Tracker',
    short_name: 'GAT',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    manifestOptions: {
      icons: [
        {
          src: 'img/apex-legends.png',
          sizes: '500x500',
          type: 'image/png'
        }
      ]
    }
  }
};
