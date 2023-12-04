const { User } = require("../models");
const{ Notificacao }= require("../models");

// Lista todos os usuários
exports.listNotificacoes = async (req, res) => {
  try {
    const notificacoes = await Notificacao.findAll();
    res.json(notificacoes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar uma Notificação" });
  }
};

// Cria um novo usuário
exports.createNotificacao = async (req, res) => {
  try {
    const notificacao = await Notificacao.create(req.body);
    res.json(notificacao);
  } catch (error) {
    console.error("Erro ao criar uma nova Notificação:", error);
    res.status(500).json({ error: "Erro ao criar uma nova Notificação" });
  }
};

// Obtém detalhes de um usuário específico
exports.getNotificacaorById = async (req, res) => {
  const { id } = req.params;
  try {
    const notificacao = await Notificacao.findByPk(id);
    if (notificacao) {
      res.json(notificacao);
    } else {
      res.status(404).json({ error: "Notificação  não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Notificação" });
  }
};

// Atualiza um usuário existente
exports.updateNotificacao = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Notificacao.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedNotificacao = await Notificacao.findByPk(id);
      res.json(updatedNotificacao);
    } else {
      res.status(404).json({ error: "Notificação não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Notificação" });
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
 exports.deleteNotificacao = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Notificacao.destroy({
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
