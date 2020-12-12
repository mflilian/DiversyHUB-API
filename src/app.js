const express = require("express")
const bodyParser = require("body-parser")
const index = require("./routes/index")
const candidates = require("./routes/candidatesRouter")
const empresas = require("./routes/empresaRouter")
const cursos = require("./routes/cursosRouter")
require('dotenv-safe').config()

const dataBase = require("./model/database")
dataBase.connect()

const app = express()

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json())

app.use("/", index);
app.use("/candidates", candidates);
app.use("/empresas", empresas);
app.use("/cursos", cursos)

module.exports = app