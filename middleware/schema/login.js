const { check, body, checkSchema } = require('express-validator')

const checkuser = {
  email: {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },
  password : {
    notEmpty: true,
    errorMessage: 'No puede estar vacío.'
  },

}
module.exports = checkuser