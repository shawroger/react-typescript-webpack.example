const path = require('path');
const HtmlWebpackPulgin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
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
        new HtmlWebpackPulgin({
            filename: 'index.html',
            template: './public/index.html',
            inject: 'body',
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.tsx', '.js']
    }
};