const authService = require('../services/authenticationService')

const login = (req, res, next) => {
  const { email, password } = req.body
  const { cookies } = req

  if (!email && !password && !cookies.sessionId) {
    res.status(401).send({ mensaje: 'Los datos no son correctos' })
    return
  }

  if (email && password) {
    const userData = {
      email,
      password
    }
    const userIdLog = authService.checkUser(userData)
    if (!userIdLog) {
      res.status(401).send({ mensaje: 'No está en el sistema' })
      return
    }

    const sessionId = authService.generateSessionId(userIdLog)
    res.cookie('sessionId', sessionId, { httpOnly: true })
    next()
  } else if (cookies.sessionId) {
  // ¿existe la cookie de sesión?
    const sessions = require('../database/sessions.json')
    const session = sessions.find(session => session.sessionId === cookies.sessionId)
    if (session) {
      // Sí, ¿el usuario está autorizado?
      const users = require('../database/users.json')
      const user = users.find(user => user.id === session.userId)

      if (user) {
        // autorizado, se permite el acceso
        // TODO
      } else {
        res.status(401).send({ mensaje: 'No está autorizado/a' })
      }
    } else {
      res.status(401).send({ mensaje: 'No está autorizado/a' })
      // TODO redirigir a inicio de sesión
    }
  } else {
    res.send(500)
  }
}

module.exports = {
  login
}
