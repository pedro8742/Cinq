const { MetaFinanceira } = require("../models");

// Lista todas as metas financeiras
exports.listMetasFinanceiras = async (req, res) => {
  try {
    const metasFinanceiras = await MetaFinanceira.findAll();
    res.json(metasFinanceiras);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar metas financeiras" });
  }
};

// Cria uma nova meta financeira
exports.createMetaFinanceira = async (req, res) => {
  try {
    const metaFinanceira = await MetaFinanceira.create(req.body);
    res.json(metaFinanceira);
  } catch (error) {
    console.error("Erro ao criar meta financeira:", error);
    res.status(500).json({ error: "Erro ao criar meta financeira" });
  }
};

// Obtém detalhes de uma meta financeira específica
exports.getMetaFinanceiraById = async (req, res) => {
  const { id } = req.params;
  try {
    const metaFinanceira = await MetaFinanceira.findByPk(id);
    if (metaFinanceira) {
      res.json(metaFinanceira);
    } else {
      res.status(404).json({ error: "Meta financeira não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar meta financeira" });
  }
};

// Atualiza uma meta financeira existente
exports.updateMetaFinanceira = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await MetaFinanceira.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedMetaFinanceira = await MetaFinanceira.findByPk(id);
      res.json(updatedMetaFinanceira);
    } else {
      res.status(404).json({ error: "Meta financeira não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar meta financeira" });
  }
};

// Exclui falso uma meta financeira
/*exports.deleteMetaFinanceira = async (req, res) => {
  const { id } = req.params;

  try {
    const metaFinanceira = await MetaFinanceira.findByPk(id);

    if (!metaFinanceira) {
      return res.status(404).json({ error: "Meta financeira não encontrada" });
    }

    await metaFinanceira.update({ ativo: false });

    res.json({ message: "Meta financeira marcada como inativa (soft delete)" });
  } catch (error) {
    console.error("Erro ao marcar meta financeira como inativo:", error);
    res.status(500).json({ error: "Erro ao marcar meta financeira como inativo" });
  }
};*/

// Exclui de verdade uma meta financeira
exports.deleteMetaFinanceira = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await MetaFinanceira.destroy({
      where: { id },
    });
    if (deleted) {
      res.json({ message: "Meta financeira excluída com sucesso" });
    } else {
      res.status(404).json({ error: "Meta financeira não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir meta financeira" });
  }
};
