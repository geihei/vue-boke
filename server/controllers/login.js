const authenticate = require('../services/user-Info')

const userLogin = {
    async login(ctx,next){
        const requestBody = ctx.request.query;
        let data = await authenticate
        console.log(JSON.stringify(data))
        // logger.info(`enter getInterfaceInfo ->${JSON.stringify(requestBody)}`)
        // const data = await InterfaceService.getInterfaceInfo(requestBody);
        console.log('恭喜成功打通接口')
        ctx.body = '1';
        await next()    
    },
}

module.exports = userLogin