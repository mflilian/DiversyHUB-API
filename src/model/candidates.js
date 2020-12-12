const mongoose = require('mongoose');
const candidatesSchema = new mongoose.Schema({ 
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true, required: true},

        nomeCompleto: {type: String, required: true},
        contatoTelefone: {type: Number, required: true},
        contatoEmail: {type: String, required: true},
        dataNascimento: {type: String, required: true},
        localNascimento: {type: String, required: true},
        escolaridade: {type: String, required: true},
        objetivo: {type: String, required: true,},
        resumoProfissional: {type: String, required: true,},
        email: { type: String, required: true },
        password: { type: String, required: true }
    },
        {
            versionKey: false
        } 
);


const candidatesCollection = mongoose.model('candidates', candidatesSchema)
module.exports = candidatesCollection 