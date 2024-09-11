const express = require('express')
const path = require('node:path')
const router = require('./router')
const app = express()

// Configurando View Engine para ejs
app.set('view engine', 'ejs')
// Configurando pasta de Views
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
// app.use(express.static)
app.use(router) // Utilizando as rotas criadas em router.js

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Servidor iniciado em http://localhost:" + PORT)
})