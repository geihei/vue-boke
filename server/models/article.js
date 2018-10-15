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
    console.log(JSON.stringify(params) + '----------models')
    if (params === {}) query = articleModel.find()
    else query = articleModel.find(params)
    return query.exec()
}

/**
 * 新增文章
 * @param {*} articleData 
 */
async function addArticle(articleData) {
    let articleData = {
        title: 'addtitle',
        content: '我们的目标是--没有蛀牙',
        time: '2018-11-11',
        type: 'css',
        author: 'moonths',
        isDel: '0'
    }
    articleModel.create(articleData, (err, articleData) => {
        if (err) console.log(err)
        console.log('新增成功:' + articleData)
    })
}

/**
 * 删除文章 彻底删除
 * @param {*} id 
 */
async function deleteArticle(id) {
    articleModel.remove({_id: id}, (err, res) => {
        if (err) console.log(err)
        console.log('删除成功：' + res)
    })
}

/**
 * 更新文章 放置回收站 isDel = 1
 * @param {*} articleData 
 */
async function updateArticle(articleData) {
    let articleData = {
        _id: '',
        title: 'addtitle',
        content: '我们的目标是--没有蛀牙',
        time: '2018-11-11',
        type: 'css',
        author: 'moonths',
        isDel: '1'
    }
    articleModel.update({_id: articleData._id}, articleData, (err, res) => {
        if (err) console.log(err)
        console.log('更新成功：' + res)
    })
}

module.exports = {
    articleModel,
    queryArticleData,
    addArticle,
    deleteArticle,
    updateArticle
}
