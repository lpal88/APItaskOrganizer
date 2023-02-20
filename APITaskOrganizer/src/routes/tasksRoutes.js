/**
@desc Este archivo contiene las rutas específicas del recurso Task.
*/
const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router
  .route('/')
  .get(taskController.getAllTasks)

router.route('/:task')
  .get(taskController.getOneTask)

module.exports.router = router
