const webpack = require('webpack')


const config = {
    watch: true,
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'react-component.js',
        libraryTarget: 'umd',
        library: 'ReactComponent'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                loader: 'style!css'
            }
        ]
    },
    plugins: []
}

module.exports = config;