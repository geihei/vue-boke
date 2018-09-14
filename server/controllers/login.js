
const aa = {
    async login(ctx,next){
        const requestBody = ctx.request.query;
        // logger.info(`enter getInterfaceInfo ->${JSON.stringify(requestBody)}`)
        // const data = await InterfaceService.getInterfaceInfo(requestBody);
        console.log('恭喜成功打通接口')
        ctx.body = '恭喜成功打通接口';
        await next()    
    },
}

module.exports = aa