var express = require('express')
var router = express.Router()
var controller = require('../controllers/note')
var noteValidator = require('../middleware/validator/note')
var noteSchema = require('../middleware/schema/note')
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
  checkSchema(noteSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return noteValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  auth,
  param('id').custom(id => {
    return noteValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  auth,
  param('id').custom(id => {
    return noteValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router