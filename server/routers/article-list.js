/**
 * restful api 子路由
 */

const router = require('koa-router')()
const article = require('../controllers/article')

const routers = router
    .get('/getArticleData', article.getArticleData)
    .get('/getArticleDetail', article.getArticleDetail)
    .post('/updateArticleList', article.updateArticleList)
    .post('/deleteArticleData', article.deleteArticleData)

module.exports = routers