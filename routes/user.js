var express = require('express')
var router = express.Router()
var controller = require('../controllers/user')
var userValidator = require('../middleware/validator/user')
var loginSchema = require('../middleware/schema/login')
const { body,checkSchema, param, validationResult } = require('express-validator')
const validator = require('../middleware/validator')
const auth = require('../middleware/auth')

router.post('/login',
  checkSchema(loginSchema),  
  body('email').custom(email => {
    return userValidator.existsEmailLogin(email)
  }),
  validator.returnErrors,
  controller.signIn
)

router.post('/logout',
auth,  
controller.signOut
)

router.get('/list', 
  auth, 
  controller.list
)

router.get(
  '/show/:id',
  auth,
  param('id').custom(id => {
    return userValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)

module.exports = router