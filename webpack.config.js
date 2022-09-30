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
        },
        {
          test: /\.css$/,
          use: [
            isDev && require.resolve('style-loader'),
            isProd && {
              loader: MiniCssExtractPlugin.loader,
              // css is located in `static/css`, use '../../' to locate index.html folder
              // in production `paths.publicUrlOrPath` can be a relative path
              options: { publicPath: '../../' }
            },
            {
              loader: require.resolve('css-loader'),
              options: {
                url: false
              }
            }
          ].filter(Boolean),
          sideEffects: true
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
        styles: path.resolve(__dirname, './src/styles')
      }
    }
  };

  return config;
};
