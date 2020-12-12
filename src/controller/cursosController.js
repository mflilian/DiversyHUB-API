const cursos = require("../model/curso.json");
const { connect } = require("../model/database");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken"); 
const { auth } = require("./autenticacao");

connect();

 const getAllCursos = (req, res) => {
 const token = auth(req, res);
 jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(403).send("Token inválido!");
    }
       return res.status(200).send(cursos);
     }
 )} ;


const getCursoById = (req, res) => {
    const id = req.params.id
    const cursoFiltrado = cursos.find((cursos) => cursos.id == id)
    res.status(200).send(cursoFiltrado)
}


const getCursosByType = (req, res) => {
    const tipo = cursos.filter((cursos) => cursos.tipo)
    res.status(200).send(tipo)
}

const getCursosByName = (req, res) => {
    const cursos = req.params.nome
    const cursosFiltradosPorNome = cursos.filter((cursos) => cursos.nome == nome)

    res.status(200).send(cursosFiltradosPorNome);
}


module.exports = {
    getAllCursos,
    getCursoById,
    getCursosByType,
    getCursosByName
} 



/*
const allCursos = (req, res) => {
    const token = auth(req, res);
    jwt.verify(token, SECRET, (err) => {
      if (err) {
        return res.status(403).send("Token inválido");
      }
    });
    cursosModel.find((err, cursos) => {
      if (err) {
        return res.status(424).send({ message: err.message });
      }
      let resFinal = this.aggregateCursos(cursos)
      res.status(200).send(resFinal);
    });
  };

const aggregateCursos = (cursos) => {
    let objFinal = {}
    let port = cursos.filter('português')
    objFinal[port.nome] = port.link
    return objFinal
} */
