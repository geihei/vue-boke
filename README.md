# vue-boke

> A Vue.js project

## 代码目录

``` bash

├── build/                              webpack-config文件夹 运行node所需配置文件
│   └── add-template.js                     node 新增模板
├── config/                             config文件
├── server/                             node后台文件夹
│   ├── controllers                         controller 主要对请求过来的数据进行操作以及返回给请求数据
│   ├── data                                数据库文件夹
│   ├── middleware                          koa中间件
│   ├── models                              model 主要对数据库的直接操作 增删改查等
│   ├── routers                             koa-router koa路由 对外暴露接口和路径
│   ├── services                            services 业务逻辑处理 如在每篇文章末尾加上作者和时间的操作
│   ├── utils                               连接数据库的配置文件
│   ├── app.js                              后台入口文件
│   ├── ...
├── sketch/                             模板文件夹
│   ├── template.vue                        模板文件 快速生成文件
│   ├── ...
├── src/                                vue前端文件夹
│   ├── admin/                              主要页面文件夹
│   ├── assets/                             静态图片文件夹
│   ├── components/                         组件文件夹
│   ├── css/                                公用态css文件夹
│   ├── network/                            请求接口文件夹
│   ├── route/                              路由相关文件夹
│   ├── utils/                              公用工具文件夹
│   ├── vuex/                               vuex文件夹
│   ├── app.vue                             前端入口 vue
│   ├── main.js                             前端入口 js
│   ├── permission.js                       路由验证 是否需要登录
│   ├── ...
├── README.md                           README
├── postcss.config.js                   fix bug
└── package.json                        项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 
npm run dev

# 启动server服务
npm run server

# 打包
npm run build

# 查看项目包大小
npm run build --report

# 使用以下命令快速生成.vue文件
# 如果是添加在admin文件夹下会自动生成路由
# 如果是添加在components文件夹下需手动添加路由
npm run addtemplate

# 本地需要有MongoDB
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
