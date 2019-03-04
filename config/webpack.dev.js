const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        openPage: 'dist/pages/settledApproval.html',
        overlay: true,
        compress: true,
        //host: "192.168.0.101",
        hot: true,
        publicPath: '/dist/'
    },
    output: {
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(sc|le|c)ss$/,
                use: [
                    'style-loader',
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
            //         }
            //     }
            // }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "SERVER_ENV": JSON.stringify("development")
        })
    ],

});