const express = require('express')
const app = express()
const index = require('./routes/indexRoutes')
const cors = require('cors')

const corsOptions = {
  origin: ['http://localhost:5173/#/'],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(
  corsOptions
))

app.use(express.json())
app.use((req, res, next) => {
  const date = new Date().toLocaleTimeString()
  console.log(
    '\x1b[41m%s\x1b[0m',
    `[info] ${date} peticion: ${req.method} ${req.originalUrl}`
  )
  next()
})

app.use('/api', index.router)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`[INFO] Servidor escuchando en ${PORT} `)
})
