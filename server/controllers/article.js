const articleMethods = require('../services/article')

const article = {
    async getArticleData(ctx, next) {
        const requestQuery = ctx.request.query
        let data = await articleMethods.getArticleData(requestQuery)
        if (!data) {
            ctx.e403({ code: 403, message: '数据请求有误' })
        } else {
            ctx.body = {
                code: 0,
                message: '获取tabledata成功',
                data
            }
        }
        await next()
    }
}

module.exports = article