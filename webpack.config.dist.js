let path = require('path');
let webpack=require("webpack");

let ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
let HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
let BUILD_PATH = path.resolve(ROOT_PATH, 'build'); //发布文件所存放的目录

module.exports = {
    entry: {
        "index":path.resolve("src/app.jsx")
    },
    output: {
        publicPath: './', //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: BUILD_PATH, //编译到当前目录
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel-loader',
            include: [APP_PATH]
        },{
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract(['style-loader','css-loader','postcss-loader']),
            include: [APP_PATH]
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader','postcss-loader']),
            include: [APP_PATH]
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['babel-loader'],
            include: [APP_PATH]
        }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: 'index.html', //生成的html存放路径
            template: './src/template/template.html', //html模板路径
            hash: false,
        }),
        new ExtractTextPlugin('[name].css'),
        //提取出来的样式和common.js会自动添加进发布模式的html文件中，原来的html没有
        new webpack.optimize.CommonsChunkPlugin({"name":"common", "filename":"common.bundle.js"}),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
};
