const taskServices = require('../services/taskServices')

const getAllTasks = (req, res, next) => {
  const allTasks = taskServices.getAllTasks()
  if (!allTasks) {
    res.status(404).send('NO HAY TAREAS')
    return
  }
  res.send(allTasks)
}
const getOneTask = (req, res, next) => {
  const { task } = req.params

  const oneTask = taskServices.getOneTask(task)

  if (!oneTask) {
    res.status(404).send('NO ENCONTRADA')
    return
  }
  res.send(oneTask)
}

module.exports = {
  getAllTasks,
  getOneTask

}
