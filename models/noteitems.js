'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoteItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NoteItems.belongsTo(models.Note, { as: "note", foreignKey: "note_id" });
      NoteItems.belongsTo(models.Items, { as: "items", foreignKey: "item_id" });
    }
  }
  NoteItems.init({
    note_id: {
      type: DataTypes.INTEGER,
      allowNull : false,
      unique: {
        msg : 'id se encuentra registrado'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull : false,
      unique: {
        msg : 'id se encuentra registrado'
      }
    },
    quantity: DataTypes.STRING,
    total: DataTypes.STRING,
    attach: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NoteItems',
  });
  return NoteItems;
};