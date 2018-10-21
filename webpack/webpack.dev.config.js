import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

// Common config.
import {
    distPath,
    entry,
    extensions,
    plugins,
    rules,
    srcPath,
    title,
} from './common.config';

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
        'webpack/hot/only-dev-server'
    ].concat(entry),

    mode: 'development',

    module: {
        rules,
    },

    output: {
        filename: 'bundle.js',
        path: distPath,
        publicPath: '/'
    },

    plugins: plugins.concat([
        new HtmlWebpackPlugin({
            title,
            inject: 'body',
            template: resolve(srcPath, 'index.hbs'),
            minify: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin({
            title: 'UNICORN POWER_UP!!!',
            contentImage: resolve(__dirname, 'unicorn.png'),
            alwaysNotify: true
        })
    ]),

    resolve: {
        extensions
    },
};
