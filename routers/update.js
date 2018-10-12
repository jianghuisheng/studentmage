
var express = require('express');
var StuModel = require('../models/StuModel');
var BanjiModel = require('../models/BanjiModel');

var app = express();

app.get('/student/:stuname', function(req, res){

    var stuname = req.params.stuname;
    BanjiModel.find().exec(function(err, banjis){
        StuModel.findOne({stuname:stuname}).populate('banji', 'lesson name').exec(function(err, student){

            if(!student){

                // 跳转到错误页面
                return res.render('error', {
                    error:1,
                    msg:'学生未注册'
                })
            }

            res.render('templates/update', {
                student:student,
                banjis
            })
        })
    })
})

// 更新
app.post('/student/update/:stuname', function(req, res){
    var stuname = req.params.stuname;
    req.body.updateTime = new Date();

    StuModel.findOne({stuname:stuname}).exec(function(err, student){
        if(err){
            return res.render('error', {
                error:1,
                msg:'数据库错误'
            })
        }
        if( !student ){
            return res.json({
                error:1,
                msg:'该学生不存在'
            })
        }
        StuModel.updateOne({stuname:stuname}, req.body).exec(function(err){
            if(err){
                return res.render('error', {
                    error:1,
                    msg:'数据库错误'
                })
            }
            res.json({
                error:0,
                msg:"修改成功"
            })
        })

    })
})


module.exports = app;