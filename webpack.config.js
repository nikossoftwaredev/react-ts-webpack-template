/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  const isProd = argv.mode === 'production';

  const devServer = {
    open: true,
    historyApiFallback: true,
    port: 3000,
    hot: true,
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
    context: __dirname,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
      sourceMapFilename: '[name].js.map',
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
          test: /.(ts|tsx)?$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
          use: [{ loader: 'ts-loader', options: { transpileOnly: true } }]
        },
        {
          test: /\.css$/i,
          loader: 'css-loader',
          options: {
            url: true
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // fallback to style-loader in development
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.json'],
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
      alias: {
        components: path.resolve(__dirname, './src/components'),
        hooks: path.resolve(__dirname, './src/hooks'),
        pages: path.resolve(__dirname, './src/pages'),
        'redux-app': path.resolve(__dirname, './src/redux-app'),
        types: path.resolve(__dirname, './src/types'),
        utils: path.resolve(__dirname, './src/utils')
      }
    }
  };

  return config;
};
