module.exports = {
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
};
