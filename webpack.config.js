
//  项目工程模块化

//  打包JS
//  模块化css/less/scss
//  模块打包 png/svg/iconfont
//  模块打包  app.vue   .vue后缀的文件
const path = require("path");  //node 模块
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");  // 操作html
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");  // 打开浏览器
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");  // 抽离样式

module.exports = {
    entry:["./src/index.js"],    // 入口文件
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[hash:8].js",  //以 MD5 加密 生成 hash 8个长度  名称的scripts 来防止缓存  main.xs1dqwer.js
        publicPath:""   //  / 根目录  index.html 自动引入 js 文件 文件的相对目录 
    },

    devtool:"source-map",   // 方便调试  查看打包之前的文件

    resolve:{
        alias:{   //别名
            "react":path.join(__dirname,"node_modules","react")
        }
    },

    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:[
                    "babel-loader"
                ]
            },
            {
                test:/\.(css|less)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  // 转为node 风格代码
                    use:['css-loader',      // 变成 模块
                        {
                            loader:"postcss-loader",
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),   // 美化css 代码
                                        require("postcss-px2rem")({remUnit:100}), // px 转 rem 
                                        require("autoprefixer")()  // 自动补全 
                                    ]
                                }
                            }
                        },
                        "less-loader"
                    ]
                })
            },
            {
                test:/\.(css|scss)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  // 转为node 风格代码
                    use:['css-loader',      // 变成 模块
                        {
                            loader:"postcss-loader",  // 转换css 代码
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),   // 美化css 代码
                                        require("postcss-px2rem-exclude")({
                                            remUnit:100,
                                            exclude:/mint-ui/i
                                            }), // px 转 rem 
                                        require("autoprefixer")()  // 自动补全 
                                    ]
                                }
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test:/\.(png|gif|svg|jpg|woff|woff2|eot|ttf)\??.*$/,  //打包iconfont/png
                use:["url-loader?limit=8192&name=font/[hash:8].[name].[ext]"]
            }
        ]
    },

    // 配置项目开发服务器  webpack-dev-server
    devServer:{
        contentBase:path.join(__dirname,"dist"),   // 服务器 工作目录 dist 
        compress:true,
        hot:true,
        // open:true,
        host:"0.0.0.0",
        port:8000,
        publicPath:"",
        historyApiFallback:true,   // html5 history api 
        disableHostCheck:true 
    },



    // webpack 插件 plugin
    // html 
    plugins:[
        new openBrowserWebpackPlugin({url:"http://localhost:8000"}),
        new htmlWebpackPlugin({
            template:"./src/index.html",     //    指明编译的html
            inject:true    // 自动注入的js/css 
        }),
        new extractTextWebpackPlugin({
            filename:"css/app.[hash:8].css",
            allChunks:true,   // 获取全部数据
            disable:false     
        }),
        new webpack.HotModuleReplacementPlugin(),   // 热替换  实现自动刷新 

    ]
}