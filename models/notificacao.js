// models/notificacao.js

const { DataTypes } = require("sequelize");
const { User } = require("./user");

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

  //Notificacao.belongsTo(sequelize.models.User);
  Notificacao.belongsTo(User, {
    constraint: true,
    foreignKey: "UserId",
  });
  User.hasMany(Notificacao, { foreignKey: "UserId" });

  return Notificacao;
};
