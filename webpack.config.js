
module.exports = {
    entry: ['./src/js/app.js','./src/scss/main.scss'],
    output: {
        path: __dirname + '/dist',
        filename: 'build.js',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'dist/fonts/'
                    }
                }]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }
        ],

    },
    watch: true,
};