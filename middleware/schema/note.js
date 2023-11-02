const { check, body, checkSchema } = require('express-validator')

const checkSection = {
  customer_id: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  },
  date: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  },
  total: {
    notEmpty: true,
    errorMessage: 'it cant be empty'
  }

}
module.exports = checkSection