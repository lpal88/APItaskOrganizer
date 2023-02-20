/**
@desc Este archivo contiene funciones para manejar la autenticación de usuarias en la aplicación.
*/

const authenticationModel = require('../database/models/authenticationModel')

const checkUserEmail = (email, password) => {
  const user = authenticationModel.checkUserEmail(email, password)
  return !user ? false : user.id
}

const addSession = (userId, sessionId) => {
  if (!authenticationModel.checkSession(sessionId)) {
    authenticationModel.addSession(userId, sessionId)
  }
}

const checkSession = (sessionId) => {
  const session = authenticationModel.checkSession(sessionId)
  return !session ? false : session.sessionId
}

const checkIfSessionExist = (userId) => {
  const session = authenticationModel.checkIfSessionExist(userId)
  return !session ? false : session.sessionId
}

module.exports = {
  checkUserEmail,
  addSession,
  checkSession,
  checkIfSessionExist
}
