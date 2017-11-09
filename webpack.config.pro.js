const webpack = require('webpack')


const config = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/src/',
        filename: 'react-component.min.js',
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
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'react-dom/server': 'react-dom/server'
    },
    plugins: []
}


 config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true,
            unsafe: true
        }
    })
);
 

module.exports = config;