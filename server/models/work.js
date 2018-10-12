const mongoose = require('./../utils/db-util')
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
    }
})

let tableModel = mongoose.model('tabledata', tableSchema, 'tabledata')

async function queryTableData(page) {
    let query = tableModel.find()
    // if (!pwd) {
    //     console.log('--------------')
    //     query = query.select('-password')
    // }
    return query.exec()
}


// module.exports = userModel

module.exports = {
    tableModel,
    queryTableData,
}
