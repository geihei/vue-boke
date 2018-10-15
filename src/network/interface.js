import axios from './api'

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
export const login = data => {
    return axios({
        url: '/login',
        method: 'post',
        data
    })
}

export const getAllTableData = (type) => {
    return axios({
        url: `/getAllTableData`,
        method: 'get',
        param: {
            type: type
        }
    })
}

// 默认全部导出
export default {
    login,
    getAllTableData
}