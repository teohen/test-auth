const jwt = require('jsonwebtoken')

const AuthController = require("../controller/auth.controller")


class AuthService {
    users = []
    createToken(id) {
        return jwt.sign({ id: id }, process.env.APP_SECRET)
    }
}


module.exports = new AuthService()