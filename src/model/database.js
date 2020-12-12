const mongoose = require("mongoose")

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/diversyhub" 
const connect = () => {
    mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex:true })
const connection = mongoose.connection
connection.on('error',() => console.error('Erro ao conectar o MongoDB.'))

connection.once('open', () => console.log('Conectado ao MongoDB!'))
}
module.exports = { connect }