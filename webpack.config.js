const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   // mode: 'production',
//   context: path.join(__dirname, './'),
//   entry: './app/index.jsx',
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js',
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         loader: 'jsx-loader',
//         exclude: /node_modules/,
//         include: path.join(__dirname, 'app'),
//       },
//     ],
//   },
// };

module.exports = {
  context: path.join(__dirname, './'),
  entry: './app/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // devServer: {
  //   contentBase: './dist'
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
  ]
};
