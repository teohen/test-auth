const crypto = require('crypto')
const AuthService = require('../services/AuthService')

const AuthController = {
    createUser(email, password) {
        const password_hash = crypto.pbkdf2Sync(password, '123', 3, 32, 'sha512').toString('hex')
        const token = 'sdjoiadjoiasj'
        return AuthService.createUser(email, password_hash, token)
    }
}


module.exports = AuthController