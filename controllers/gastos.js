const { User } = require("../models");
const{ Gastos }= require("../models");

// Lista todos os usuários
exports.listGastos = async (req, res) => {
  try {
    const gastos = await Gastos;
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Gastos" });
  }
};

// Cria um novo usuário
exports.createGastos = async (req, res) => {
  try {
    const gasto = await Gastos.create(req.body);
    res.json(gasto);
  } catch (error) {
    console.error("Erro ao criar uma nova Gasto:", error);
    res.status(500).json({ error: "Erro ao criar uma nova Gasto" });
  }
};

// Obtém detalhes de um usuário específico
exports.getGastoById = async (req, res) => {
  const { id } = req.params;
  try {
    const gasto = await Gastos.findByPk(id);
    if (gasto) {
      res.json(gasto);
    } else {
      res.status(404).json({ error: "Gasto  não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Gasto" });
  }
};

// Atualiza um usuário existente
exports.updateGasto = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Gastos.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedGasto = await Gastos.findByPk(id);
      res.json(updatedGasto);
    } else {
      res.status(404).json({ error: "Gasto não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Gastos" });
  }
};

// Exclui falso um usuário
/*exports.deleteNotificacao = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    await user.update({ ativo: false });

    res.json({ message: "Usuário marcado como inativo (soft delete)" });
  } catch (error) {
    console.error("Erro ao marcar usuário como inativo:", error);
    res.status(500).json({ error: "Erro ao marcar usuário como inativo" });
  }
};*/

// Exclui de verdade um usuário
 exports.deleteGasto = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Gastos.destroy({
      where: { id },
    });
    if (deleted) {
      res.json({ message: 'Notificação excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Notificação não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir Notificação' });
  }
};
