// models/metaFinanceira.js

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const MetaFinanceira = sequelize.define("MetaFinanceira", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: false,
    },
    dataVencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    progresso: {
      type: DataTypes.STRING,
    },
  });

  // Relacionamento N para 1 com o modelo User
  MetaFinanceira.belongsTo(sequelize.models.User);

  return MetaFinanceira;
};
