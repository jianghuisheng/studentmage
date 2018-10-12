/**
 * Created by Administrator on 2018/8/29.
 */
var express = require('express');

var StuModel = require('../models/StuModel');

var app = express();

app.get('/student/delete/:stuname', function(req, res){
    var stuname = req.params.stuname;
    // 查找学生是否存在
    StuModel.findOne({stuname:stuname}).exec(function(err, student){
        if(err){
            return res.json( {
                error:1,
                msg:'数据库错误'
            })
        }

        if(!student){
            return res.json({
                error:1,
                msg:'学生已删除'
            })
        }

        StuModel.deleteOne({stuname:stuname}).exec(function(err){
            if(err){
                return res.json({
                    error:1,
                    msg:'数据库错误'
                })
            }
            res.json({
                error:0,
                msg:'学生删除成功'
            })
        })

    })
})


module.exports = app;



