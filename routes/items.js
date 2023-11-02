var express = require('express')
var router = express.Router()
var controller = require('../controllers/items')
var itemsValidator = require('../middleware/validator/items')
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
    return itemsValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)

module.exports = router