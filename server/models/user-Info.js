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

let userModel = mongoose.model('user', userSchema)

module.exports = userModel