import { Configuration } from 'webpack';

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
  stats: {
    warningsFilter: [
      /Critical dependency: the request of a dependency is an expression/,
      /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/,
    ],
  },
};

export default config;
