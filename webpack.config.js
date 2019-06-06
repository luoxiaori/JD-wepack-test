const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry:"./app/js/main.js",

    module:{
        rules:[{
            test: /\.html$/,
            loader: "html-loader"
        },{
            test:/\.vue$/,
            loader: "vue-loader",
        },{
            test: /\.scss$/,
            //loader: "vue-style-loader!css-loader?modules=true&localIdentName='[local]_[hash:base64:5]'!px2rem-loader?remUnit=75&remPrecision=8!sass-loader"
            use:[{
                loader:process.env.NODE_ENV !== 'production'? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            },{
                loader:'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:8]'
                }
            },{
                loader:'px2rem-loader',
                options:{
                    reUni:75,
                    remPrecision:8
                }
            },{
                loader:'sass-loader'
            }]
        }
        // ,{
        //     test: /\.css$/,
        //     //loader: "vue-style-loader!css-loader?modules=true&localIdentName='[local]_[hash:base64:5]'!px2rem-loader?remUnit=75&remPrecision=8"
        //     use:[{
        //         loader:process.env.NODE_ENV !== 'production'? 'vue-style-loader' : MiniCssExtractPlugin.loader,
        //     },{
        //         loader:'css-loader',
        //         options: {
        //           modules: true,
        //           localIdentName: '[local]_[hash:base64:8]'
        //         }
        //     },{
        //         loader:'px2rem-loader',
        //         options:{
        //             reUni:75,
        //             remPrecision:8
        //         }
        //     }]
        //   }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/views/index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        })
    ],

    devServer: {
       contentBase: path.resolve(__dirname, './dist'),
       host: 'localhost',//提供服务
       compress: true,//gzip压缩
       port: 8888,
       historyApiFallback: true,

   },

    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },

    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].min.js"
    },

    mode:"development"
}