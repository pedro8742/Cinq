const { Usuario } = require("../models");

// Lista todos os usuários
exports.listUsers = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

// Cria um novo usuário
exports.createUser = async (req, res) => {
  try {
    const user = await Usuario.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

// Obtém detalhes de um usuário específico
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Usuario.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
};

// Atualiza um usuário existente
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await User.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedUser = await Usuario.findByPk(id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

// Exclui um usuário
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Usuario.destroy({
      where: { id },
    });
    if (deleted) {
      res.json({ message: "Usuário excluído com sucesso" });
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir usuário" });
  }
};
