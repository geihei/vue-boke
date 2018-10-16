import axios from 'axios'
import config from './config'
import qs from 'qs'
import router from '@/router'
// 使用vuex做全局管理使用
import store from '@/vuex'

export default function $axios(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: config.baseURL,
            headers: {},
            transformResponse: [function (data) {
                
            }]
        }) 

        // request 拦截器
        instance.interceptors.request.use(
            // 请求拦截器 在请求开始前做一些验证
            config => {
                let token = store.state.token
                // 请求开始的时候可以结合 vuex 开启全屏 loading 动画
                // ...
                // 带上token
                if (token) {
                    // 不知道为什么一定要加上Bearer 在token前
                    config.headers.Authorization = `Bearer ${store.state.token}`
                } else {
                    // token不存在 重定向到登录页面
                    router.push('/login')
                }
                // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
                if (config.method === 'post') {
                    if (config.data.__proto__ === FormData.prototype || config.url.endsWith('path') || config.url.endsWith('mark') || config.url.endsWith('patchs')) {

                    } else {
                        config.data = qs.stringify(config.data)
                    }
                }
                return config
            },
            // 请求发生错误时需要做些什么
            error => {
                // 请求错误时
                console.log('request:', error)
                // 判断请求超时
                if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
                    console.log('timeout请求超时')
                    // return service.request(originalRequest);//再重复请求一次
                }
                // 需要重定向到错误页面
                const errorInfo = error.response
                console.log(errorInfo)
                if (errorInfo) {
                    //error =errorInfo.data  //页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
                    const errorStatus = errorInfo.status; // 404 403 500 ...
                    router.push({
                        path: `/error/${errorStatus}`
                    })
                }
                return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
            }
        )

        // response 拦截器
        instance.interceptors.response.use(
            response => {
                let data;
                // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
                if (response.data == undefined) {
                    data = response.request.responseText
                } else {
                    data = response.data
                }
                // 根据返回的code值来做不同的处理
                // console.log(JSON.parse(data))
                // switch (data.rc) {
                //     case 1:
                //         console.log(data.desc)
                //         break;
                //     case 0:
                //         // store.commit('changeState')
                //         console.log('登录成功')
                //     default:
                //         console.log('默认值')
                // }
                // 若不是正确的返回code，且已经登录，就抛出错误
                // const err = new Error(data.desc)
                // err.data = data
                // err.response = response
                // throw err
                return data
            },
            err => {
                console.log('错误请求')
                if (err && err.response) {
                    switch (err.response.status) {
                        case 400:
                        err.message = '请求错误'
                        break

                        case 401:
                        err.message = '未授权，请登录'
                        store.commit('logout')
                        router.replace({
                            path: 'login',
                            query: {redirect: router.currentRoute.fullPath}
                        })
                        break

                        case 403:
                        err.message = '拒绝访问'
                        break

                        case 404:
                        err.message = `请求地址出错: ${err.response.config.url}`
                        break

                        case 408:
                        err.message = '请求超时'
                        break

                        case 500:
                        err.message = '服务器内部错误'
                        break

                        case 501:
                        err.message = '服务未实现'
                        break

                        case 502:
                        err.message = '网关错误'
                        break

                        case 503:
                        err.message = '服务不可用'
                        break

                        case 504:
                        err.message = '网关超时'
                        break

                        case 505:
                        err.message = 'HTTP版本不受支持'
                        break

                        default:
                    }
                }
                console.error(err)
                return Promise.reject(err) // 返回接口返回的错误信息
            }
        )

        // 请求处理
        const method = options.method
        const url = options.url
        // console.log(options)
        if (method === 'get') {
            instance.get(url, {
                params: options.param
            }).then(res => {
                resolve(res)
                return false
            }).catch(error => {
                reject(error)
            })
        } else if (method === 'post') {
            instance.post(url, {
                data: options.data
            }).then(res => {
                resolve(res)
                return false
            }).catch(error => {
                reject(error)
            })
        } else if (method === 'put') {

        } else if (method === 'delete') {

        } else if (method === 'dispatch') {

        }
    })
}