const express = require('express')
const app = express()
const index = require('./routes/indexRoutes')

export const handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'http://localhost:5173/#/',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    },
    body: JSON.stringify('Hello from Lambda!')
  }
  return response
}

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
