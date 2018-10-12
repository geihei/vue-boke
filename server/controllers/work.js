const tableMethods = require('../services/work')

const table = {
    async getAllTableData(ctx,next){
        // const requestBody = ctx.request.body;
        let data = await tableMethods.getData()
        if (!data) {
            ctx.e403({ code: 403, message: '邮箱或密码错误' })
        } else {
            ctx.body = {
                code: 0,
                message: '登录成功',
                data
            }
        }
        await next()    
    },
}

module.exports = table