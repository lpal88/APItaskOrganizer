/**
@desc Este archivo contiene las rutas específicas del recurso Board.
*/
const express = require('express')
const router = express.Router()
const boardController = require('../controllers/boardController')

router
  .route('/')
  .get(boardController.getAllBoards)
  .post(boardController.insertOneBoard)

router.route('/:board')
  .get(boardController.getOneBoard)
  .delete(boardController.deleteOneBoard)
  .put(boardController.updateOneBoard)

module.exports.router = router
