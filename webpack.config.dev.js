const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = { 
    entry: ['react-hot-loader/patch', './src/index.react.js'],
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        publicPath: '/js/',
        filename: 'app.js'
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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.[s]css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'dist', 'js', 'app.js')]
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: 'dist/',
        hot: true,
        historyApiFallback: {
            index: '/index.html'
        }
    }
};