const path = require('path');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry:'./src/index.js', // entry point,can be multiple too i.e "Code Splitting"



    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        

    },

    optimization: {
       // runtimeChunk: 'single',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    
                ],

            },

            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

            },

            {

                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',

            },


        ],


    },

    plugins: [
        //new BundleAnalyzerPlugin()
        
    ],


};
