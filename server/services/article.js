const articleModel = require('../models/article')

// 未加错误验证
const articleMethods = {
    async getArticleData(params) {
        let data = await articleModel.queryArticleData(params)
        return data
    },
    async addArticle(articleData) {
        let data = await articleModel.addArticle(articleData)
        return data
    },
    async deleteArticle(id) {
        let data = await articleModel.deleteArticle(id)
        return data
    },
    async updateArticle(articleData) {
        let data = await articleModel.updateArticle(articleData)
        return data
    }
}

module.exports = articleMethods