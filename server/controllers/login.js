const userMethods = require('../services/user-Info')
const jwt = require('jsonwebtoken')
const secret = 'my boke jwt'

const userLogin = {
    async login(ctx,next){
        const requestBody = ctx.request.body;
        let data = await userMethods.authenticate(requestBody.username, requestBody.password)
        if (!data) {
            ctx.e403({ code: 403, message: '邮箱或密码错误' })
        } else {
            const userToken = {
                name: data.username,
                id: data.id
            }
            const token = jwt.sign(userToken, secret, {expiresIn: '2h'})
            data.token = token
            ctx.body = {
                code: 0,
                message: '登录成功',
                data
            }
        }
        await next()    
    },
}

module.exports = userLogin