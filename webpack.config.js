const path = require('path');

module.exports = [{
  mode: "development",
  entry: "./index.js",
  output: {
    library: 'consoleCool',
    libraryTarget: "var",
    // libraryExport: './index.js',
    filename: "console-cool.js",
  },
  target: "web",
  devtool: "source-map"
},
  {
    mode: "development",
    entry: "./test/messages",
    output: {
      library: 'messages',
      libraryTarget: "var",
      // libraryExport: './index.js',
      filename: "messages.js",
      path: path.resolve(__dirname, 'test/dist')
    },
    target: "web",
    devtool: "source-map"

  }];
