var path = require('path');

module.exports = {
    entry: {
        index :'./app/index.ts'
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    resolve: {
        root:[path.join(__dirname,'node_modules')],
        extensions:['', '.ts', '.webpack.js', '.web.js', '.js', '.html']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    }
};