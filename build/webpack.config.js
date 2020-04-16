const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWeboackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')


module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'../dist'),//配置路径是相对于本文件的
        filename: '[name].[hash].js'//所有文件都在dist文件夹下
        //filename: 'js/[name].[hash].js'//js文件在dist/js文件夹下 , html在dist文件夹下
    },
    resolve:{
        extensions: [".js", ".ts", ".tsx",".vue"],
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
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
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:1024,
                        esModule:false //解决用ejs语法引入路径时 ， 路径解析为src="[boject module]"
                    }
                }]
            },
            {
                test:/\.vue$/,
                use:[{
                    loader:'vue-loader',
                }]
            }
        ]
    },
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8089'
    },
    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWeboackPlugin({
            template:path.resolve(__dirname,'../src/index.html')
        }),
       
    ]
}