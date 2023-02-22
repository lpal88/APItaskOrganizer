const express = require('express')
const router = express.Router()
const boardsRoutes = require('./boardsRoutes')
const tasksRoutes = require('./tasksRoutes')
const userRoutes = require('./userRoutes')
const pictogramsRoutes = require('./pictogramsRoutes')

router.get('/', (req, res, next) => {
  console.log('Hola Mundo, desde IndexRoutes')
})

router.use('/boards', boardsRoutes.router)
router.use('/tasks', tasksRoutes.router)
router.use('/user', userRoutes.router)
router.use('/pictograms', pictogramsRoutes)

module.exports.router = router
