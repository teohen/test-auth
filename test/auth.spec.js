const { expect, assert } = require('chai')
const request = require('supertest')
const faker = require('faker')
const app = require('../src/app')
const encrypt = require('../src/utils/encript')

before(() => {
    userFake = {
        email: faker.internet.email(),
        password: faker.internet.password()
    }
})
describe('Authentication test', () => {
    it('Should return a created status code when the valid requirements are provided', async () => {
        const response = await request(app).post('/user').send(userFake)
        assert.equal(response.status, 201, 'status code should be 201')
    })

    it('Should return a bad request status code when the password is not provided', async () => {
        const response = await request(app).post('/user').send({
            ...userFake, password: null
        })
        assert.equal(response.status, 400, 'Status should be 400')
    })

    it('Should return a bad request status code when the email is not provided', async () => {
        const response = await request(app).post('/user').send({
            ...userFake, email: null
        })
        assert.equal(response.status, 400, 'Status should be 400')
    })
    it('Should return a user with a token when the user is created', async () => {
        const response = await request(app).post('/user').send(userFake)
        assert.exists(response.body.token, "response should have a token property")
        assert.exists(response.body.email, "response should have a email property")
        assert.exists(response.body.password_hash, "response should have a password_hash property")
    })
    it('Should return a correct hash for the provided password', async () => {
        const hashed_pass = encrypt(userFake.password)
        const response = await request(app).post('/user').send(userFake)
        assert.equal(response.body.password_hash, hashed_pass, 'hashs should be equal')
    })
})