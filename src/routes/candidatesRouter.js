const express = require('express');
const router = express.Router();
const controller = require("../controller/candidatesController")
 

router.get("/buscar/:id", controller.candidateById)
router.post("/", controller.registerNewCandidate)
router.post("/login", controller.login)
router.patch("/alterar/:id", controller.alterarCandidates)
router.delete ("/deletar/:id", controller.deletarCandidate)

module.exports = router



