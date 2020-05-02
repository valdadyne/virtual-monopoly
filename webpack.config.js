/* eslint-disable no-undef */

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([]),
        new HtmlWebpackPlugin({
            title: 'Virtual Monopoly',
            template: './src/app.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            exclude: '/node_modules'
        }, {
            title: 'Virtual Monopoly',
            template: './src/templates/classic',
        }
        )
    ]
}