// 监测 token 是否过期
const jwt = require('jsonwebtoken')
const secret = require('./token.config')

module.exports = async (ctx, next) => {
    // console.log(req.headers)
    let token
    if (ctx.request.headers['authorization']) {
        token = ctx.request.headers['authorization'].split(' ')[1]
    }
    // 解构 token，生成一个对象 { name: xx, iat: xx, exp: xx }
    // console.log(secret)
	let decoded = jwt.decode(token, secret.secret)
	// console.log(decoded.exp + '-------------------------')
	// console.log(Date.now() / 1000)
	// 监测 token 是否过期
	if(token && decoded.exp <= Date.now() / 1000) {
		ctx.body = {
            body: 401,
            message: 'token 已过期'
        };
    }
    // 必须要有await 
	await next()
}