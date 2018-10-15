const articleModel = require('../models/article')

const articleMethods = {
    async getArticleData(type) {
        let data = await articleModel.queryArticleData(type)
        return data
    }
}


module.exports = articleMethods