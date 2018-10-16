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
    },
    async updateArticleList(ctx, next) {
        const requestBody = ctx.request.body
        console.log(requestBody)
        let data = await articleMethods.updateArticleList(requestBody)
        if (!data) {
            ctx.e403({ code: 403, message: '数据请求有误' })
        } else {
            ctx.body = {
                code: 0,
                message: '更新tabledata成功',
                data
            }
        }
        await next()
    },
    async deleteArticleData(ctx, next) {
        const requestBody = ctx.request.body
        console.log(requestBody)
        let data = await articleMethods.deleteArticleData(requestBody)
        if (!data) {
            ctx.e403({ code: 403, message: '数据请求有误' })
        } else {
            ctx.body = {
                code: 0,
                message: '删除成功',
                data
            }
        }
        await next()
    }
}

module.exports = article