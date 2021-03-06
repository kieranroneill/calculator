import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { join, resolve } from 'path';
import webpack from 'webpack';

const uriLimit = 65000;

export const distPath = join(__dirname, '..', 'dist');
export const srcPath = join(__dirname, '..', 'src');
export const title = 'Equal Experts Calculator';

export const entry = [
    resolve(srcPath, 'index.ts'),
];
export const extensions = [
    '.js',
    '.ts',
    '.tsx'
];
export const plugins = [
    new FaviconsWebpackPlugin({
        logo: resolve(srcPath, 'favicon.png'),
        title,
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'), // Default to development.
        },
    }),
];
export const rules = [
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
];
