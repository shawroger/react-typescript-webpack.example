const path = require('path');
const HtmlWebpackPulgin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: '[name].[hash:6].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.tsx$/,
            exclude: /node_modules/,
            use: "awesome-typescript-loader"
        }]
    },
    plugins: [    
        new CleanWebpackPlugin(),
        new HtmlWebpackPulgin({
            isDev: false,
            filename: 'index.html',
            template: './public/index.html',
            inject: 'body',
            hash: true
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js','.ts', '.tsx']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};