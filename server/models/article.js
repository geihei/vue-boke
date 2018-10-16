const mongoose = require('../utils/db-util')
const Schema = mongoose.Schema
// 数据增删改查
let articleSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    content: {
        type: String
    },
    time: {
        type: String
    },
    author: {
        type: String
    },
    type: {
        type: String
    },
    isDel: {
        type: String
    }
})

let articleModel = mongoose.model('articlelist', articleSchema, 'articlelist')

/**
 * 根据条件查询文章列表
 * @param {查询条件} params 
 * 为空查找所有
 * 否则按条件查询
 */
async function queryArticleData(params) {
    let query
    if (params === {}) query = articleModel.find()
    else query = articleModel.find(params)
    return query.exec()
}

/**
 * 删除文章 彻底删除
 * @param {删除项id} idList
 * 数据类型为数组 方便批量删除
 */
async function deleteArticleData(idList) {
    console.log(idList + '-----------model')
    let query = articleModel.remove({'_id': { $in: idList}}, (err, res) => {
        if (err) console.log(err)
        console.log('删除成功：' + res.ok)
    })
    return query.exec()
}

/**
 * 新增或修改文章列表
 * @param {文章列表数据} articleData 
 * 若有id则为修改 没有id则为新增
 */
async function updateArticleList(articleData, id) {
    if (id) {
        articleModel.update({_id: id}, articleData, (err, res) => {
            if (err) console.log(err)
            console.log('更新成功：' + res)
        })
    } else {
        articleModel.create(articleData, (err, articleData) => {
            if (err) console.log(err)
            console.log('新增成功:' + articleData)
        })
    }
}

module.exports = {
    articleModel,
    queryArticleData,
    deleteArticleData,
    updateArticleList
}
