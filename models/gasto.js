// models/gasto.js

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Gasto = sequelize.define("Gasto", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: false,
    },
    dataGasto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataRegistro: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  // Relacionamento N para 1 com o modelo User
  Gasto.belongsTo(sequelize.models.User);

  return Gasto;
};
