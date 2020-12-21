const { assert } = require('chai')
const faker = require('faker')

const UserService = require('../../src/service/UserService')

describe("User service", () => {
    it("Should return a created user when the valid arguments are passed", () => {
        const user = UserService.createUser(faker.internet.email(), faker.internet.password())

        assert.exists(user.id, 'should have property id')
        assert.exists(user.email, 'should have property email')
        assert.exists(user.password_hash, 'should have property password_hash')
    })
})