const express = require("express");
const router = express.Router();
const controller = require("../controllers/empresaController");

router.get("/",controller.allEmpresa);
router.post("/", controller.registerNewEmpresa);
router.post("/login", controller.loginEmpresa);
router.delete("/", controller.removeEmpresaByEmail);

module.exports = router;
