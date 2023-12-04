const express = require("express");
const usuarioController = require("./controllers/usuarioController");

const router = express.Router();

// Rotas CRUD para usuários
router.get("/usuario", usuarioController.listUsers);
router.post("/usuario", usuarioController.createUser);
router.get("/usuario/:id", usuarioController.getUserById);
router.put("/usuario/:id", usuarioController.updateUser);
router.delete("/usuario/:id", usuarioController.deleteUser);

module.exports = router;
