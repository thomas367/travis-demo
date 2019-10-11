const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.react.js'],
    output: {
        path: path.join(__dirname, 'public', 'js'),
        publicPath: '/js/',
        filename: 'app.js'
    },
    resolve: {
        modules: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'node_modules')]
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
                            },
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'public', 'js', 'app.js')]
        }),
        new UglifyJSPlugin()
    ]
};
