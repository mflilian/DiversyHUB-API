require("dotenv-safe").config();
const { connect } = require("../model/database");
const candidatesModel = require("../model/candidates");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./autenticacao");

connect();

/// REGISTRO 

const registerNewCandidate = (req, res) => {

  const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = encryptedPassword;
  const newCandidate = new candidatesModel(req.body);
  newCandidate.save((err) => {
    if (err) {
      return res.status(424).send({message: err.message})
    }
    res.status(201).send({
      message: "Candidate cadastrade com sucesso!",
      candidate: newCandidate,
    })
  })
};


/// ROTA DE LOGIN

const login = (req, res) => {
  console.log("login")
  candidatesModel.findOne({ email: req.body.email }, (err, candidate) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    };
    if (!candidate) {
      return res.status(404).send('Não existe candidate cadastrade com esse email');
    };

    const password = bcrypt.compareSync(req.body.password, candidate.password);
    if (!password) {
      return res.status(403).send('Acesso negado: senha incorreta');
    };

    const token = jwt.sign({ email: candidate.email }, SECRET);
    return res.status(200).send(token);
  });
};

///// PESSOAS CADASTRADADS 

  const allCandidates = (req, res) => {
    const token = auth(req, res);
    
    jwt.verify(token, SECRET, (err) => {
      if (err) {
        return res.status(403).send("Invalid token");
          }
    }),
    candidatesModel.find((err, candidates) => {
      if (err) {
      return res.status(424).send({ message: err.message });
      }
      res.status(200).send(candidates);
    })
  }
  

//// CANDIDATES POR ID 

  const candidateById = (req, res) => {
  const id = req.params.id;
  candidatesModel.findById(id, (err, candidate) => {
    if (err) {
      res.status(424).send({ message: err.message });
    } else if (candidate) {
      return res.status(200).send(candidate);
    }
    res.status(404).send("Candidate não encontrade!");
  });
};


///// ALTERAR DADOS CURRICULO

  const alterarCandidates = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Token inválido!");
    }
    const id = req.params.id;
    const updateCandidate = req.body;
    candidatesModel.findByIdAndUpdate(id, updateCandidate, (err, candidate) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (candidate) {
        return res.status(200).send("Atualizado com sucesso!");
      }
      res.status(404).send("Registro não encontrado");
    });
  });
};


//// DELETAR CURRICULO
  const deletarCandidate = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Token inválido!");
    }
    const params = req.query;
    candidatesModel.deleteMany(params, (err, candidate) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      } else if (candidate) {
        return res.status(200).send("Removide com sucesso!");
      }
      res.status(404).send("Registro não encontrado!");
    });
  });
};

module.exports = {
    login,
    registerNewCandidate,
    allCandidates,
    candidateById,
    alterarCandidates,
    deletarCandidate,
};