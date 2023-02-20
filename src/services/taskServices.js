/**
@desc Este archivo contiene funciones para manejar la lógica de negocio de la aplicación,
en relación al recurso Task.
*/
const taskModel = require('../database/models/taskModel')

const getAllTasks = () => {
  const tasks = taskModel.getAllTasks()
  return tasks
}
const getOneTask = (description) => {
  const oneTask = taskModel.getOneTask(description)

  return oneTask
}

module.exports = {
  getAllTasks,
  getOneTask

}
