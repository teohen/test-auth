const crypto = require('crypto')
function encrypt(password) {
    const password_hash = crypto.pbkdf2Sync(password, '123', 3, 32, 'sha512').toString('hex')
    return password_hash
}

module.exports = encrypt