const webpackPreprocessor = require('@cypress/webpack-preprocessor');

const projectWebpackConfig = require('../../webpack.config.js');

const webpackOptions = {
  resolve: projectWebpackConfig.resolve,
  module: {
    ...projectWebpackConfig.module,
    rules: [
      ...projectWebpackConfig.module.rules,
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['url-loader'],
      },
    ],
  },
};

const options = {
  webpackOptions,
};

module.exports = webpackPreprocessor(options);
