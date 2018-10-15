const articleModel = require('../models/article')

const articleMethods = {
    async getArticleDataByType(type) {
        let data = await articleModel.queryArticleDataByType(type)
        return data
    }
}


module.exports = articleMethods