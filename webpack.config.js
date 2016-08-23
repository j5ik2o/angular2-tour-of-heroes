var path = require('path');
var helpers = require('./config/helpers');
module.exports = {
    entry: {
        index: './app/index.ts'
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './',
        port: 3000
    },
    resolve: {
        root: [path.join(__dirname, 'node_modules')],
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js', '.html']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('./index.html')]
            },
        ]
    }
};