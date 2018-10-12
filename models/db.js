
// 连接数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ejsStudent');
var db = mongoose.connection;
db.once('open', function(err){
    if(err){
        console.log('数据库连接失败');
    }else {
        console.log('数据库连接成功');
    }
})

module.exports = db;