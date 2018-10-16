import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

const distPath = join(__dirname, '..', 'dist');
const srcPath = join(__dirname, '..', 'src');
const title = 'Equal Experts Calculator';
const uriLimit = 65000;

const localhost = 'http://localhost';
const port = 1337;

export default {
    devServer: {
        contentBase: distPath,
        historyApiFallback: true,
        port: port,
    },

    devtool: 'eval-source-map',

    entry: [
        `webpack-dev-server/client?${localhost}:${port}`,
        'webpack/hot/only-dev-server',
        resolve(srcPath, 'index.ts'),
    ],

    mode: 'development',

    module: {
        rules: [
            // Templating.
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },

            // Scripts.
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    configFile: join(__dirname, '..', 'tsconfig.json'),
                }
            },

            // Assets.
            {
                test: /\.png$/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'image/png'
                }
            },
            {
                test: /\.ttf/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'application/octet-stream'
                }
            },
            {
                test: /\.woff$/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'application/font-woff'
                }
            },
            {
                test: /\.woff2$/,
                loader: 'url-loader',
                options: {
                    limit: uriLimit,
                    mimeType: 'font/woff2'
                }
            }
        ],
    },

    output: {
        filename: '[name].[hash].js',
        path: distPath,
        publicPath: '/'
    },

    plugins: [
        new FaviconsWebpackPlugin({
            logo: resolve(srcPath, 'favicon.png'),
            title,
        }),
        new HtmlWebpackPlugin({
            title,
            inject: 'body',
            template: resolve(srcPath, 'index.hbs'),
            minify: false,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
            },
        }),

        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({
            title: 'UNICORN POWER_UP!!!',
            contentImage: resolve(__dirname, 'unicorn.png'),
            alwaysNotify: true
        }),
    ],

    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ],
    }
};
