const articleMethods = require('../services/article')

const table = {
    async getArticleDataByType(ctx,next){
        const requestQuery = ctx.request.query
        const param = requestQuery.type
        let data = await articleMethods.getArticleDataByType(param)
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
    },
}

module.exports = table