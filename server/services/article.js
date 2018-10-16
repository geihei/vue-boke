const articleModel = require('../models/article')

// 未加错误验证
const articleMethods = {
    async getArticleData(params) {
        let data = await articleModel.queryArticleData(params)
        return data
    },
    async deleteArticleData(idList) {
        let data = await articleModel.deleteArticleData(idList)
        return data
    },
    async updateArticleList(articleData, id) {
        let data = await articleModel.updateArticleList(articleData, id)
        return data
    }
}

module.exports = articleMethods