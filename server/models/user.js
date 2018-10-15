const mongoose = require('../utils/db-util')
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

let userModel = mongoose.model('user', userSchema, 'user')

async function queryByUserName(username, pwd = false) {
    let query = userModel.findOne({ 'username': username })
    // if (!pwd) {
    //     console.log('--------------')
    //     query = query.select('-password')
    // }
    return query.exec()
}


// module.exports = userModel

module.exports = {
    userModel,
    queryByUserName,
}