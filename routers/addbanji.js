
var express = require('express');
var BanjiModel = require('../models/BanjiModel');

var app = express();

app.post('/banji/add', function(req, res){
    var name = req.body.name;
    // 判断班级是否存在
    BanjiModel.findOne({name:name}).exec(function(err, banji){
        if(err){
            return res.json({
                error:1,
                msg:'数据库错误'
            })
        }

        if( banji ){
            return res.json({
                error:1,
                msg:'班级已添加，请重新输入'
            })
        }

        var data = new BanjiModel(req.body);
        data.save(function(err){
            if(err){
                return res.json({
                    error:1,
                    msg:'数据库错误'
                })
            }
            res.json({
                error:0,
                msg:'班级添加成功，请添加学生'
            })
        })

    })

})



module.exports = app;
