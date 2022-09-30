/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = (env, argv) => {
  const devServer = {
    open: true,
    historyApiFallback: true,
    port: 3000,
    liveReload: true,
    watchFiles: ['src/**/*'],
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false
      }
    },
    static: {
      directory: path.join(__dirname, 'public')
    }
  };

  const config = {
    context: __dirname, // to automatically find tsconfig.json
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
      publicPath: '/'
    },
    devServer,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /.tsx?$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
          use: [{ loader: 'ts-loader', options: { transpileOnly: true } }]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.json']
    }
  };

  return config;
};
