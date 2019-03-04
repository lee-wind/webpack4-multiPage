const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');

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
                // flexible: {
                //     test:/[\\/]src[\\/]common[\\/]flexible.js/,//也可以值文件/[\\/]src[\\/]js[\\/].*\.js/,
                //     name: "flexible", //生成文件名，依据output规则
                //     minSize: 0,
                //     priority: 90,
                //     chunks:"all",
                // },
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
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 192,
                            remPrecision: 3,
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 8192,
            //             name: 'images/[name].[ext]',
            //             publicPath: '../'
            //         }
            //     }
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 8192,
            //             name: 'fonts/[name].[ext]',
            //             publicPath: "../"
            //         }
            //     }
            // },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, '../src/pages/*.html'))
        })
    ]
};