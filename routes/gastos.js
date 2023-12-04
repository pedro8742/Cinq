const express = require("express");
const gasto = require("../controllers/gastos.js");

const router = express.Router();

// Rotas CRUD para Gastos
router.get("/gastos", gasto.listGastos);
router.post("/gastos", gasto.createGastos);
router.get("/gastos/:id", gasto.getGastoById);
router.put("/gastos/:id", gasto.updateGasto);
router.delete("/gastos/:id", gasto.deleteGasto);

module.exports = router;
