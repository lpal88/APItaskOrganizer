/**
@desc Este archivo contiene funciones para manejar las funcionalidades del recurso Task.
*/
const data = require('../pictograms.json')

const getAllTasks = () => {
  return data
}
const getOneTask = (description) => {
  return data[description]
}

module.exports = {
  getAllTasks,
  getOneTask
}
