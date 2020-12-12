const mongoose = require("mongoose")

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/diversyhub" 
const connect = () => {
    mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex:true })
const connection = mongoose.connection
connection.on('error',() => console.error('Erro ao conectar o MongoDB.'))

connection.once('open', () => console.log('Conectado ao MongoDB!'))
}
module.exports = { connect }