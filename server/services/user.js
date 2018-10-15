const userModel = require('../models/user')

const userMethods = {
    async authenticate(uname, password) {
        let user = await userModel.queryByUserName(uname)
        if (!user) {
            throw new Error('user uname or password is error!')
        }
        if (!user.password) {
            throw new Error(`user ${uname} has not init password!`)
        }
        if (password !== user.password) {
            throw new Error('user uname or password is error!')
        }
        
        user = user.toObject()
        delete user.password
        return user
    }
}


module.exports = userMethods