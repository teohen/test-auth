const { expect, assert } = require('chai')
const request = require('supertest')
const faker = require('faker')
const app = require('../src/app')

before(() => {
    userFake = {
        email: faker.internet.email(),
        password: faker.internet.password()
    }
})
describe('Authentication test', () => {
    it('Should return a created status code when the valid requirements are provided', async () => {
        const response = await request(app).post('/user').send(userFake)

        expect(response.status).eql(201)
    })

    it('Should return a bad request status code when the password is not provided', async () => {
        const response = await request(app).post('/user').send({
            ...userFake, password: null
        })

        expect(response.status).eql(400)
    })

    it('Should return a bad request status code when the email is not provided', async () => {
        const response = await request(app).post('/user').send({
            ...userFake, email: null
        })

        expect(response.status).eql(400)
    })
    it('Should return a user with a token when the user is created', async () => {
        const response = await request(app).post('/user').send(userFake)
        assert(response.body.token, "Missing property token in the response")
        assert(response.body.email, "Missing property email in the response")
        assert(response.body.password_hash, "Missing property password_hash in the response")
    })
})