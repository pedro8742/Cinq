const express = require("express");
const notificacao = require("../controllers/notificacao.js");

const router = express.Router();

// Rotas CRUD para notificacao
router.get("/notificacao", notificacao.listNotificacoes);
router.post("/notificacao", notificacao.createNotificacao);
router.get("/notificacao/:id", notificacao.getNotificacaorById);
router.put("/notificacao/:id", notificacao.updateNotificacao);
router.delete("/notificacao/:id", notificacao.deleteNotificacao);

module.exports = router;
