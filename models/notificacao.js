// models/notificacao.js

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Notificacao = sequelize.define("Notificacao", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataHora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Relacionamento N para 1 com o modelo User
  Notificacao.belongsTo(sequelize.models.User);

  return Notificacao;
};
