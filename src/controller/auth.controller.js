
const AuthService = require('../service/AuthService')
const UserService = require('../service/UserService')
const { encrypt } = require('../utils/util')


const AuthController = {
    createUser(email, password) {
        const password_hash = encrypt(password)
        const user = UserService.createUser(email, password_hash)
        const token = AuthService.createToken(user.id)
        return {
            ...user,
            token
        }
    },
    login(email, password) {

    }
}


module.exports = AuthController