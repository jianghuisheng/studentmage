var express = require('express');
var StuModel = require('../models/StuModel');
var BanjiModel = require('../models/BanjiModel');

var app = express();


// /\/(:page)?/  不建议用，凡是路径匹配/:page都会进入
app.get('/', function(req, res){
    // get请求的数据参数形式
    // 参数中的数字类型都是字符串
    // 获取当前的页码数，默认首页是第一页
    var page = parseInt(req.query.page || 1) ;
    // 设置可见的页码数长度 默认是5

    var pages = [page];
    var left = page;
    var right = page;

    // 设置每页显示的数量
    var showNum = 5;


    BanjiModel.find().exec(function(err, banjis){

        // 获取所有的学生数量
        StuModel.find().count(function(err, count){

            var pageTotal = Math.ceil( count / showNum );

            while ( (right < pageTotal || left > 1 ) && pages.length < 5 ){

                if( right < pageTotal ){
                    right++;
                    pages.push(right);
                }

                if( left > 1 ){
                    left--;
                    pages.unshift(left);
                }
            }

            // 当前页面显示的学生数量
            //skip((page-1)*showNum)跳过当前页所有数量,limit限制每页显示的数量
            StuModel.find().populate('banji', 'lesson name').skip( (page - 1) * showNum ).limit(showNum).exec(function(err, students){

                // console.log(students);
                res.render('index', {
                    title:'首页',
                    students:students,
                    banjis,
                    page,
                    pages,
                    pageTotal
                })
            });

        })
    })





});



module.exports = app;