let mongoose = require('mongoose'),
    db = 'mongodb://localhost:27017/boke';
/**
* 连接数据库,默认mongodb连接不需要密码
*/
mongoose.connect(db);
 
/**
* 数据库连接成功
*/
mongoose.connection.on('connected', function () {
    console.error('数据库连接成功:' + db);
});
 
/**
* 数据库连接异常
*/
mongoose.connection.on('error', function (err) {
    console.error('数据库连接异常: ' + err);
});
 
/**
* 数据库连接断开
*/
mongoose.connection.on('disconnected', function () {
    console.error('数据库连接断开' + db);
});
 
module.exports = mongoose