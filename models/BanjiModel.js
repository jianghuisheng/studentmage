
var mongoose = require('mongoose');

// 生成一个实例化的数据模板，可以修改内部数据的类型及其默认值
var banjiSchema = new mongoose.Schema({
    name:String,
    count:{
        // 当前属性的数据类型
        type:Number,
        // 当前属性的默认值
        default:0
    },
    teacher:String,
    lesson:String,
    location:String,
    time:{
        type:Date,
        // 当前时间
        default:Date.now()
    }
})

var BanjiModel = mongoose.model('banji', banjiSchema);

module.exports = BanjiModel;