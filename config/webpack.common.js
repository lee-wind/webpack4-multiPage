const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MyPlugin = require('../plugins/myPlugin')

module.exports = {
    entry: getEntries(),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: "../"
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[ext]',
                        publicPath: '../'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'fonts/[name].[ext]',
                        publicPath: "../"
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        // minimize: true
                        publicPath: '../'
                    }
                },{
                    loader: path.resolve('./loaders/styleAttrInHtml.js'),
                    options: {
                        remUnit: 192,
                        remPrecision: 3,
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            Css: path.resolve(__dirname, '../src/css/'),
            Images: path.resolve(__dirname, '../src/images/'),
            Js: path.resolve(__dirname, '../src/js/'),
            Common: path.resolve(__dirname, '../src/common/'),
        },
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        ...getNewHtmlWebpackPlugin(),
        new MyPlugin({
            paths: ["./configuration/config.js"]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ]
};

function getEntries(){
    const entrys = {};
    getEntryName().forEach(page => {
        entrys[page] = `./src/js/${page}.js`
    });
    console.log(entrys);
    return entrys;
}

function getNewHtmlWebpackPlugin(){
    const newHtmlWebpackPlugins = [];
    getEntryName().forEach(page => {
        newHtmlWebpackPlugins.push(new HtmlWebpackPlugin({
            filename: `pages/${page}.html`,
            template: `src/pages/${page}.html`,
            chunks: [`${page}`, 'vendor', 'common', 'runtime'],
        }))
    });
    return newHtmlWebpackPlugins;
}

function getEntryName(){
    const pages = [];
    fs.readdirSync('./src/pages').forEach(item => {
        pages.push(item.slice(0, -5));
    });
    return pages;
}
