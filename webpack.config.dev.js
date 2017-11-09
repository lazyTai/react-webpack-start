const webpack = require('webpack')
var postcss = require('postcss-loader')

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
                use: [
                    'style-loader', {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {

                            plugins: (loader) => [
                                require('precss')(),
                                require('autoprefixer')(), //CSS浏览器兼容
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [

    ]
}

module.exports = config;