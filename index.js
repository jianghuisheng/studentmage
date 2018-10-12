
// 导入所需要的模块
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

// 导入自定义的模块
var db = require('./models/db');


// 实例化应用
var app = express();

//设置静态资源及post请求处理
app.use( express.static('www') );
app.use( bodyParser.urlencoded({ extended:false }) );

// 设置模板引擎及其存储路径
app.set('views', './views');
app.set('view engine', 'ejs');

// 导入请求处理模块

// 首页显示
app.use(require('./routers/home'));

// 添加
app.use(require('./routers/add'));

// 信息更新
app.use( require('./routers/update') );

// 删除
app.use( require('./routers/delete') );

// 班级添加
app.use( require('./routers/addbanji') );
//班级显示
app.use( require('./routers/banjishow') );


app.listen(3008, function(){
    console.log('服务器运行了');
})