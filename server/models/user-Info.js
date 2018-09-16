const mongoose = require('./../utils/db-util')
const Schema = mongoose.Schema
// 数据增删改查
let userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

let userModel = mongoose.model('userInfo', userSchema)

/**
 * 通过username查询
 * @param username
 * @param pwd 包含密码字段
 * @returns {Promise.<Query>}
 */
async function queryByUserName(username, pwd = false) {
    let query = this.findOne({ username })
    if (!pwd) {
        query = query.select('-password')
    }
    return query.exec()
}


// module.exports = userModel

module.exports = {
    userModel,
    queryByUserName,
}