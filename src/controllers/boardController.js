const boardServices = require('../services/boardServices')

const getAllBoards = (req, res, next) => {
  const allBoards = boardServices.getAllBoards()
  if (!allBoards) {
    res.status(404).send('NO HAY TABLEROS')
    return
  }
  res.send(allBoards)
}

const getOneBoard = (req, res, next) => {
  const { board } = req.params

  const oneBoard = boardServices.getOneBoard(board)

  if (!oneBoard) {
    res.status(404).send('NO ENCONTRADO')
    return
  }
  res.send(oneBoard)
}

const insertOneBoard = (req, res, next) => {
  const { label, taskArray } = req.body

  if (!label || !taskArray) {
    res.status(400).send('FALTAN DATOS')
    return
  }

  const newBoard = boardServices.insertOneBoard(label, taskArray)
  if (!newBoard) {
    res.status(400).send('ENTRADA DUPLICADA')
    return
  }

  res.send(newBoard)
}

const deleteOneBoard = (req, res, next) => {
  const { board } = req.params
  const oneBoard = boardServices.deleteOneBoard(board)
  if (!oneBoard) {
    res.status(404).send('EL TABLERO NO EXISTE')
    return
  }
  res.send(oneBoard)
}

const updateOneBoard = (req, res, next) => {
  const dataBoard = req.body
  const boardUpdate = boardServices.updateOneBoard(dataBoard)
  if (!boardUpdate) {
    res.status(404).send('EL TABLERO NO EXISTE')
    return
  }
  res.send(boardUpdate)
}

module.exports = {
  getAllBoards,
  insertOneBoard,
  getOneBoard,
  deleteOneBoard,
  updateOneBoard
}
