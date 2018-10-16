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
    let query
    if (id) {
        query = articleModel.update({_id: id}, articleData, (err, res) => {
            if (err) console.log(err)
            console.log('更新成功：' + res)
        })
        return query.exec()
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

/**
 * 把 返回 mongoose model 的方法 转化成返回纯对象的方法
 * @param fn
 * @returns {function(...[*]=)}
 */
const toObject = fn => async (...args) => {
    const toObject = (model) => {
        if (!model) {
            return model
        }
        if (model.toObject) {
            return toObject(model.toObject())
        }
        if (model instanceof Array) {
            return model.map(m => toObject(m))
        }
        if (model instanceof Object) {
            for (let i in model) {
                if (model.hasOwnProperty(i)) {
                    model[i] = toObject(model[i])
                }
            }
            return model
        }
        return model

    }

    let result = fn.apply(this, args)
    if (result.then) {
        result = await result
    }
    return toObject(result)
}

// 修改所有方法, 使其返回纯对象
for (let i in exports) {
    if (exports.hasOwnProperty(i)) {
        let fn = exports[i]
        if (fn instanceof Function) {
            exports[i] = toObject(fn)
        }
    }
}
