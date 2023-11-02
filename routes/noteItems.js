var express = require('express')
var router = express.Router()
var controller = require('../controllers/noteitems')
var noteItemsValidator = require('../middleware/validator/noteItems')
var noteItemsSchema = require('../middleware/schema/noteItems')
const { checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')
const auth = require('../middleware/auth')

router.get('/list', 
  auth, 
  controller.list
)

router.post(
  '/add',
  auth,
  checkSchema(noteItemsSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return noteItemsValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  auth,
  param('id').custom(id => {
    return noteItemsValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  auth,
  param('id').custom(id => {
    return noteItemsValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router