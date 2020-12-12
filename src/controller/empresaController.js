require("dotenv-safe").config();
const { connect } = require("../model/database");
const empresaModel = require("../model/empresa");
const candidatesModel = require("../model/candidates")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { auth } = require("./autenticacao");

connect();

/// NOVA EMPRESA REGISTRO

const registerNewEmpresa = (req, res) => {
    ;
      const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
      req.body.password = encryptedPassword;
      const newEmpresa = new empresaModel(req.body);
      newEmpresa.save((err) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        }
        res.status(201).send({
          message: "A empresa foi registrada com sucesso!",
          administrator: newEmpresa,
        });
      });
      };


  /// ROTA DE LOGIN EMPRESA

  const loginEmpresa = (req, res) => {
      empresaModel.findOne({ email: req.body.email }, (err, empresa) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      };
      if (!empresa) {
        return res.status(404).send('Não há instituição cadastrada com esse email');
      };
  
      const password = bcrypt.compareSync(req.body.password, empresa.password);
      if (!password) {
        return res.status(403).send('Acesso negado: senha incorreta');
      };
  
      const token = jwt.sign({ email: empresa.email }, SECRET);
      return res.status(200).send(token);
    });
  };
  
  const allCandidates = (req, res) => {
  const token = auth(req, res);
  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Token inválido");
    }
  });
  candidatesModel.find((err, candidate) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(candidate);
  });
};

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

  const removeEmpresaByEmail = (req, res) => {
    const token = auth(req, res);
    jwt.verify(token, SECRET, (err) => {
      if (err) {
        return res.status(403).send("Invalid token!");
      }
      const params = req.query;
      empresaModel.deleteOne(params, (err, email) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        } else if (email) {
          return res.status(200).send("Empresa removida com sucesso!");
        }
        res.status(404).send("Empresa nao encontrada!");
      });
    });
  };
  


module.exports = {
    registerNewEmpresa,
    loginEmpresa,
    allCandidates,
    candidateById,
    removeEmpresaByEmail
}