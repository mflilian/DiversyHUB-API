const express = require("express");
const router = express.Router();
const controller = require("../controller/empresaController");

router.get("/",controller.allCandidates);
router.get("/:id", controller.candidateById);
router.post("/", controller.registerNewEmpresa);
router.post("/login", controller.loginEmpresa);
router.delete("/", controller.removeEmpresaByEmail);

module.exports = router;


