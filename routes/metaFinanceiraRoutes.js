const express = require("express");
const metaFinanceiraController = require("../controllers/metaFinanceiraController");

const router = express.Router();

// Rotas CRUD para metas financeiras
router.get("/metaFinanceira", metaFinanceiraController.listMetasFinanceiras);
router.post("/metaFinanceira", metaFinanceiraController.createMetaFinanceira);
router.get("/metaFinanceira/:id", metaFinanceiraController.getMetaFinanceiraById);
router.put("/metaFinanceira/:id", metaFinanceiraController.updateMetaFinanceira);
router.delete("/metaFinanceira/:id", metaFinanceiraController.deleteMetaFinanceira);

module.exports = router;
