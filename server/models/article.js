const mongoose = require('../utils/db-util')
const Schema = mongoose.Schema
// 数据增删改查
let tableSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    time: {
        type: String
    },
    author: {
        type: String
    },
    type: {
        type: String
    }
})

let tableModel = mongoose.model('tabledata', tableSchema, 'tabledata')

async function queryArticleData(type) {
    let query
    if (type == 'all')  query = tableModel.find()
    else query = tableModel.find({'type': type})
    // if (!pwd) {
    //     console.log('--------------')
    //     query = query.select('-password')
    // }
    return query.exec()
}


// module.exports = userModel

module.exports = {
    tableModel,
    queryArticleData,
}
