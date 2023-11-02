'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Note.belongsTo(models.Customer, { as: "Customer", foreignKey: "customer_id" });
    }
  }
  Note.init({
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull : false,
      unique: {
        msg : 'id se encuentra registrado'
      }
    },
    date: DataTypes.STRING,
    total: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};