const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob-all');
const Util = require('./util')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'js/[name].[contenthash].js',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    minSize: 0,
                    chunks: 'all',
                },
                common: {
                    test:/[\\/]src[\\/]common[\\/]/,//也可以值文件/[\\/]src[\\/]js[\\/].*\.js/,
                    name: "common", //生成文件名，依据output规则
                    minSize: 0,
                    priority: 80,
                    chunks:"all",
                },
            }
        },
        minimizer: [
            new TerserPlugin({
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    output: {
                        comments: false,
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            'transform-remove-console'
                        ]
                    }
                }
            },
            {
                test: /\.(sc|le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    Util.px2remLoader,
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new PurifyCSSPlugin({
            paths: glob.sync([
                path.join(__dirname, '../src/js/*.js'),
                path.join(__dirname, '../src/template/*.art'),
                path.join(__dirname, '../src/common/js/*.js'),
                path.join(__dirname, '../src/pages/*.html')
            ])
        })
    ]
};