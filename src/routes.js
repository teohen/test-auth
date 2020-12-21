const { Router } = require('express');
const router = require('express').Router

const AuthController = require('./controller/auth.controller');
const MainError = require('./utils/MainError')

const routes = Router();

routes.get('/status', (req, res) => {
    return res.status(200).send({ message: "ok" })
})

routes.post('/user', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password)
            throw new MainError(400, "Email and password are required")

        const result = await AuthController.createUser(email, password)
        return res.status(201).send(result)
    } catch (e) {
        // console.log('erro', e)
        if (e instanceof MainError)
            return res.status(e.statusCode).send(e.message)

        return res.status(500).send("Erro interno")
    }
})


module.exports = routes