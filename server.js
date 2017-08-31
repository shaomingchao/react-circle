var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

var server = new WebpackDevServer(webpack(config), {
    inline: true,
	hot:true
});

//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});
server.listen(8088, function() {
    console.log('正常打开8088端口');

    //通过系统进程自动打开浏览器访问8088端口
    var c = require('child_process');
    c.exec('start http://localhost:8088');
});
