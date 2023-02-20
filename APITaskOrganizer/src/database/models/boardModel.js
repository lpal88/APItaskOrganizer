/**
@desc Este archivo contiene funciones para manejar el CRUD del recurso Board.
*/
const data = require('../boards.json')
const fs = require('fs')

const getAllBoards = () => {
  console.log(data)
  return data
}

const getOneBoard = (label) => {
  return data[label]
}

const insertOneBoard = (newBoard) => {
  data[newBoard.label] = newBoard

  fs.writeFile(
    './src/database/boards.json',
    JSON.stringify(data, null, 2),
    'utf8',
    () => {
      throw new Error('ERROR AL ESCRIBIR')
    }
  )

  return newBoard
}
const deleteOneBoard = (label) => {
  const board = data[label]
  delete data[label]
  return board
}

const updateOneBoard = (board) => {
  data[board.label] = board

  fs.writeFile(
    './src/database/boards.json',
    JSON.stringify(data, null, 2),
    'utf8',
    () => {
      throw new Error('ERROR AL ESCRIBIR')
    }
  )

  return board
}

module.exports = {
  getAllBoards,
  getOneBoard,
  insertOneBoard,
  deleteOneBoard,
  updateOneBoard
}
