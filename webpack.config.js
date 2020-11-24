const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/js/main.js',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }
            },
        ],
    },
    devtool: 'cheap-eval-source-map',
    stats: {
        colors: true,
    }
};
