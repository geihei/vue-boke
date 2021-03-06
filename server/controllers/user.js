const userMethods = require('../services/user')
const jwt = require('jsonwebtoken')
const secret = require('../middleware/token.config')

const userLogin = {
    async login(ctx,next){
        const requestBody = ctx.request.body.data
        let data 
        try {
            data = await userMethods.authenticate(requestBody.username, requestBody.password)
        } catch {
            ctx.throw(500, '服务器错误')
        }
        const userToken = {
            name: data.username,
            id: data.id
        }
        const token = jwt.sign(userToken, secret.secret, {expiresIn: '2h'})
        data.token = token
        ctx.body = {
            code: 0,
            message: '登录成功',
            data
        }
        await next()    
    },
}

module.exports = userLogin