const articleMethods = require('../services/article')

const article = {
    async getArticleData(ctx, next) {
        const requestQuery = ctx.request.query
        let data
        try {
            data = await articleMethods.getArticleData(requestQuery)
        } catch {
            ctx.throw(500, '服务器错误')
        }
        ctx.body = {
            code: 0,
            message: '获取tabledata成功',
            data
        }
        await next()
    },
    async updateArticleList(ctx, next) {
        const requestBody = ctx.request.body
        if (requestBody.data._id) {
            const id = requestBody.data._id
            delete requestBody.data._id
            try {
                await articleMethods.updateArticleList(requestBody.data, id)
            } catch {
                ctx.throw(500, '服务器错误')
            }
        } else {
            try {
                await articleMethods.updateArticleList(requestBody.data)
            } catch {
                ctx.throw(500, '服务器错误')
            }
        }
        ctx.body = {
            code: 0,
            message: '更新tabledata成功'
        }
        await next()
    },
    async deleteArticleData(ctx, next) {
        const requestBody = ctx.request.body
        try {
            await articleMethods.deleteArticleData(requestBody.data)
        } catch {
            ctx.throw(500, '服务器错误')
        }
        ctx.body = {
            code: 0,
            message: '删除成功'
        }
        await next()
    }
}

module.exports = article