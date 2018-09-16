const UserModel = require('../models/user-Info')

/**
 * 用户认证
 * @param id
 * @param password
 * @returns {Promise.<void>}
 */
async function authenticate(uname, password) {
    let user = await UserModel.queryByUserName(uname, true)
    if (!user) {
        console.log('1111111111111111')
        throw new Error('user uname or password is error!')
    }
    if (!user.password) {
        console.log('333333333333333')
        throw new Error(`user ${uname} has not init password!`)
    }
    if (password !== user.password) {
        console.log('2222222222222222')
        throw new Error('user uname or password is error!')
    }
    user = user.toObject()
    delete user.password
    return user
}

module.exports = {
    authenticate
}