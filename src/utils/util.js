const crypto = require('crypto')
const { v4: uuuidv4 } = require('uuid')


function encrypt(password) {
    const password_hash = crypto.pbkdf2Sync(password, '123', 3, 32, 'sha512').toString('hex')
    return password_hash
}
function generatedUuid() {
    return uuuidv4()
}

module.exports = { encrypt, generatedUuid } 