const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    const cssModules = glob.sync(path.resolve(process.cwd(), 'src/components/**/*.scss'));
    mode: 'production',
    entry: cssModules,
    output: {
        path: path.join(__dirname, 'src', 'dist', 'css'),
        filename: 'temp.js'
    },
    resolve: {
        modules: [
            path.resolve(process.cwd(), 'src'), 
            path.resolve(process.cwd(), 'node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.[s]css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64:5]'
                            },
                            sourceMap: false,
                        }
                    },
                    { 
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'src', 'dist', 'css')],
            cleanAfterEveryBuildPatterns: [path.join(__dirname, 'src', 'dist', 'css', 'temp.js')]
        }),
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
        contentBase: 'src/dist/',
        hot: true,
        historyApiFallback: {
            index: '/index.html'
        }
    }
};