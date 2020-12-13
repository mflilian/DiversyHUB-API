const mongoose = require('mongoose');

const candidatesSchema = new mongoose.Schema({ 
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true, required: true},

        nomeCompleto: {type: String, required: true},
        contatoTelefone: {type: Number},
        contatoEmail: {type: String},
        dataNascimento: {type: String},
        localNascimento: {type: String},
        escolaridade: {type: String},
        objetivo: {type: String},
        resumoProfissional: {type: String},
        email: { type: String, required: true },
        password: { type: String, required: true }
    },
        {
            versionKey: false
        } 
);


const candidatesCollection = mongoose.model('candidates', candidatesSchema)
module.exports = candidatesCollection 