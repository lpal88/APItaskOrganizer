const express = require('express')
const router = express.Router()
const auth = require('../utils/authentication')

router
  .route('/')
  .post(auth.login)
  .post(auth.singup)

module.exports.router = router
