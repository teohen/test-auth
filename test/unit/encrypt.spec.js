const { assert } = require('chai')
const faker = require('faker')
const encrypt = require("../../src/utils/encript")


describe('Util for encryption', () => {
    it('Should return a 32 sized string hash when a password is provided', () => {
        const hash = encrypt(faker.internet.password())
        assert.lengthOf(hash, 64, 'hash should have a 64 length')
        assert.typeOf(hash, 'string', 'hash should be a string type')
    })
})