'use strict'

// const path = require('path')
const Koa = require('koa')
// const fs = require('fs')
// const mongoose = require('mongoose')
// const convert = require('koa-convert')
// const views = require('koa-views')
// const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
// const koaLogger = require('koa-logger')
// const session = require('koa-session-minimal')
// const MysqlStore = require('koa-mysql-session')
const cors = require("koa2-cors"); 
// const config = require('./../config')
const routers = require('./routers/index')

const app = new Koa()

app.use( 
  cors({
    origin: function(ctx) {
        console.log(ctx.url)
        return "http://localhost:8080";
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 3600,
    allowMethods: ['GET', 'PUT', 'POST'],
    allowHeaders: ["Content-Type", "Authorization", "Accept"]
  })
);

// koa2-cors 源码 即上面代码的实现原理
// app.use(async (ctx, next) => {
//     // 允许来自所有域名请求
//     ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
//     // 这样就能只允许 http://localhost:8080 这个域名的请求了
//     // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080"); 
//     // 设置所允许的HTTP请求方法
//     ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
//     // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
//     ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
//     // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
//     // Content-Type表示具体请求中的媒体类型信息
//     ctx.set("Content-Type", "application/json;charset=utf-8")
//     // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
//     // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
//     ctx.set("Access-Control-Allow-Credentials", true);
//     // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
//     // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
//     // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
//     ctx.set("Access-Control-Max-Age", 300);
//     /*
//     CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
//         Cache-Control、
//         Content-Language、
//         Content-Type、
//         Expires、
//         Last-Modified、
//         Pragma。
//     */
//     // 需要获取其他字段时，使用Access-Control-Expose-Headers，
//     // getResponseHeader('myData')可以返回我们所需的值
//     ctx.set("Access-Control-Expose-Headers", "myData");
//     await next();
// })

// 配置ctx.body解析中间件
// body中间件必须在路由中间件前面 否则无法解析body
app.use(bodyParser())

// 初始化路由中间件
app
    .use(routers.routes())
    .use(routers.allowedMethods());

// session存储配置
// const sessionMysqlConfig= {
//   user: config.database.USERNAME,
//   password: config.database.PASSWORD,
//   database: config.database.DATABASE,
//   host: config.database.HOST,
// }

// 配置session中间件
// app.use(session({
//   key: 'USER_SID',
//   store: new MysqlStore(sessionMysqlConfig)
// }))

// 配置控制台日志中间件
// app.use(koaLogger())

// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname , './../static')
// ))

// 配置服务端模板渲染引擎中间件
// app.use(views(path.join(__dirname, './views'), {
//   extension: 'ejs'
// }))


// 监听启动端口
app.listen( 3000 )
console.log(`the server is start at port 3000`)