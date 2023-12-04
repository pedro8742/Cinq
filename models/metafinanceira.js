// models/metaFinanceira.js

const { DataTypes } = require("sequelize");
const { User } = require("./user");

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

  MetaFinanceira.belongsTo(User, {
    constraint: true,
    foreignKey: "UserId",
  });
  User.hasMany(MetaFinanceira, { foreignKey: "UserId" });

  return MetaFinanceira;
};
