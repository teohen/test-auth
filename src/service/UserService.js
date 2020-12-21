const { generatedUuid } = require("../utils/util")

class UserService {
    users = []
    createUser(email, password_hash) {
        const user = {
            email,
            password_hash,
            id: generatedUuid()
        }
        this.users.push(user)
        return user
    }
    getUser(id) {

    }
}

module.exports = new UserService()