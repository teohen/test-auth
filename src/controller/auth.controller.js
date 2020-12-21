const crypto = require('crypto')
const AuthService = require('../services/AuthService')
const encrypt = require('../utils/encript')

const AuthController = {
    createUser(email, password) {
        const password_hash = encrypt(password)
        const token = 'sdjoiadjoiasj'
        return AuthService.createUser(email, password_hash, token)
    }
}


module.exports = AuthController