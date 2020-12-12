const express = require('express');
const router = express.Router();
const controller = require("../controller/cursosController")
 

router.get("/", controller.getAllCursos);
router.get("/:id", controller.getCursoById);
router.get("/tipo", controller.getCursosByType);
router.get("/nome", controller.getCursosByName);

module.exports = router;