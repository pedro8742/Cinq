// models/gasto.js

const { DataTypes } = require("sequelize");
import User from './user';

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

  Gasto.belongsTo(User, {
    constraint: true,
    foreingKey: 'UserId'})

  return Gasto;
};
