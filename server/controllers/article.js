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
        console.log(requestBody.data.author + '------------controllers11111111')
        if (requestBody.data._id) {
            const id = requestBody.data._id
            delete requestBody.data._id
            data = await articleMethods.updateArticleList(requestBody.data, id)
        } else {
            try {
                await articleMethods.updateArticleList(requestBody.data)
            } catch {
                console.log('新增文章出错')
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
            console.log('删除文章出错')
        }
        ctx.body = {
            code: 0,
            message: '删除成功'
        }
        await next()
    }
}

module.exports = article