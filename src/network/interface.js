import axios from './api'

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
// 登录
export const login = data => {
    return axios({
        url: '/login',
        method: 'post',
        data
    })
}


/**
 * 根据条件获取文章列表
 * @param {获取列表条件} param 
 * 若为{}则是获取所有文章 或者是{type: 'html'}格式的查询条件
 */
export const getArticleData = param => {
    return axios({
        url: '/getArticleData',
        method: 'get',
        param
    })
}

/**
 * 更新或新增文章
 * @param {更新或者新增的文章数据} data 
 * 根据data中是否传入id判断是新增或者是修改文章
 */
export const updateArticleList = data => {
    return axios({
        url: '/updateArticleList',
        method: 'post',
        data
    })
}

/**
 * 删除文章
 * @param {删除文章列表id} data
 * 数组格式，方便可以批量删除 
 */
export const deleteArticleData = data => {
    return axios({
        url: '/deleteArticleData',
        method: 'post',
        data
    })
}

// 默认全部导出
export default {
    login,
    getArticleData,
    updateArticleList,
    deleteArticleData
}