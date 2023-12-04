"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MetaFinanceiras", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(20, 2),
        allowNull: false,
      },
      dataVencimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      progresso: {
        type: Sequelize.STRING,
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("MetaFinanceiras");
  },
};
