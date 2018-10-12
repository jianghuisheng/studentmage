var mongoose = require('mongoose');
var stuSchema = new mongoose.Schema({
    // 当前文档的主键:_id, 是个非常复杂的ObjectId对象，必须通过toObject()转换成简单的对象
    // 数据生成时，该对象是由数据库自动生成的
    stuname: String,
    age: Number,
    isMale: Boolean,
    banji: {
        // 设置当前属性的类型，是个ObjectId
        // ，即班级数据的_id值
        type:mongoose.Schema.ObjectId,
        // reference:参考，即设置当前属性的参考集合
        ref:'banji'
    },
    createTime: Date,
    updateTime: Date
});

var StuModel = mongoose.model('student', stuSchema);

module.exports = StuModel;



