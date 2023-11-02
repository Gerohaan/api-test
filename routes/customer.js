var express = require('express')
var router = express.Router()
var controller = require('../controllers/customer')
var customerValidator = require('../middleware/validator/items')
const { param } = require('express-validator')
const validator = require('../middleware/validator') 
const auth = require('../middleware/auth')

router.get('/list', 
  auth, 
  controller.list
)
router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return customerValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)

module.exports = router