/**
 * Created by Administrator on 2018/8/29.
 */
var express = require('express');
var BanjiModel = require('../models/BanjiModel');

var app = express();

app.get('/banji/show', function(req, res){
    BanjiModel.find().exec(function(err, banjis){

        res.render('add', {
            banjis:banjis,
            title:'添加学生页面'
        })
    })
})


module.exports = app;