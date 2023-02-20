const usersData = require('../users.json')
const sessionsData = require('../sessions.json')
const fs = require('fs')

const checkUserEmail = (email, password) => {
  return usersData.users.find(
    (user) => user.email === email && user.password === password
  )
}

const checkSession = (sessionId) => {
  return sessionsData.sessions.find(
    (session) => session.sessionId === sessionId
  )
}

const checkIfSessionExist = (userId) => {
  return sessionsData.sessions.find((session) => session.id === userId)
}

const addSession = (id, sessionId) => {
  sessionsData.sessions.push({ id, sessionId })
  fs.writeFile(
    './src/database/sessions.json',
    JSON.stringify(sessionsData, null, 2),
    'utf8',
    () => {
      throw new Error('ERROR AL ESCRIBIR')
    }
  )
}

module.exports = {
  checkUserEmail,
  addSession,
  checkSession,
  checkIfSessionExist
}
