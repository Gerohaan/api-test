const { check, body, checkSchema } = require('express-validator')

const checkNoteItems = {
  note_id : {
    notEmpty: true,
    errorMessage: 'note id no puede estar vacío.',
  },
  item_id: {
    notEmpty: true,
    errorMessage: 'item id no puede estar vacío.'
  },
  quantity: {
    notEmpty: true,
    errorMessage: 'quantity no puede estar vacío.'
  },
  total: {
    notEmpty: true,
    errorMessage: 'total no puede estar vacío.'
  },
  attach: {
    notEmpty: true,
    errorMessage: 'attach no puede estar vacío.'
  }

}
module.exports = checkNoteItems