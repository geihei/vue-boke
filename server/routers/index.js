/**
 * 整合所有子路由
 */
const router = require('koa-router')()
const user = require('./user')
const articleList = require('./article-list')

router
    .use('/api', user.routes(), user.allowedMethods())
    .use('/api', articleList.routes(), articleList.allowedMethods())

module.exports = router