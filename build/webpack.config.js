const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWeboackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry:{a:'./src/index.ts',b:'./src/css/index.css'},
    output:{
        path:path.resolve(__dirname,'../dist'),//配置路径是相对于本文件的
        filename: '[name].[hash].js'//所有文件都在dist文件夹下
        //filename: 'js/[name].[hash].js'//js文件在dist/js文件夹下 , html在dist文件夹下
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:"ts-loader",
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                exclude:/node_modules/
            }
        ]
    },
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8089'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWeboackPlugin({
            template:'./src/index.html'
        })
    ]
}