const express = require('express');
const app = express()
const AuthRouter = require('../routes/AuthRoutes');

const router = [
    app.use('/auth', AuthRouter)
]

module.exports = router;