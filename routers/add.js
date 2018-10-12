// 接收请求并处理
var express = require('express');
var StuModel = require('../models/StuModel');


var app = express();

app.post('/student/add', function(req, res){
    req.body.createTime = new Date();
    req.body.updateTime = new Date();
    // 判断学生是否存在
    StuModel.findOne({stuname:req.body.stuname}).exec(function(err, student){
        if( err ){
            return res.json({
                error:1,
                msg:'数据库错误'
            })
        }
        // console.log(student);   {}  null
        if( student ){
            return res.json({
                error:1,
                msg:'学生已注册，请重新输入'
            })
        }

        var stu = new StuModel(req.body);
        stu.save(function(err){
            if( err ){
                return res.json({
                    error:1,
                    msg:'数据库错误'
                })
            }
            res.json({
                error:0,
                msg:'学生添加成功'
            })
        })

    })
})


module.exports = app;
