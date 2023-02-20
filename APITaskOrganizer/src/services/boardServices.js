/**
@desc Este archivo contiene funciones para manejar la lógica de negocio de la aplicación,
en relación al recurso Board.
*/
const boardModel = require('../database/models/boardModel')
const { v1: uuid } = require('uuid')

const getAllBoards = () => {
  const boards = boardModel.getAllBoards()
  return boards
}

const getOneBoard = (label) => {
  const oneBoard = boardModel.getOneBoard(label)
  return oneBoard
}

const insertOneBoard = (label, taskArray) => {
  const idBoard = uuid()

  const newBoard = {
    idBoard,
    label,
    taskArray
  }

  if (boardModel.getOneBoard(newBoard.label)) {
    return false
  }

  const insertedBoard = boardModel.insertOneBoard(newBoard)
  return insertedBoard
}

const deleteOneBoard = (label) => {
  const board = boardModel.deleteOneBoard(label)
  return board
}

const updateOneBoard = (board) => {
  const boardUpdated = boardModel.updateOneBoard(board)
  return boardUpdated
}

module.exports = {
  getAllBoards,
  insertOneBoard,
  getOneBoard,
  deleteOneBoard,
  updateOneBoard
}
