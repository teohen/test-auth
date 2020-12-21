const AuthController = require("../controller/auth.controller")

class AuthService {
    users = []
    createUser(email, password_hash, token) {
        const user = {
            email,
            password_hash,
            token
        }
        this.users.push(user)
        return user
    }
}


module.exports = new AuthService()