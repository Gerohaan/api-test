const userService = require('../services/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

class userController {

  // Login
   signIn(req, res) {

    let { email, password } = req.body;

    // Buscar usuario
    userService.getOne({email}).then(user => {
        if (!user) {
            res.status(404).json({ msg: "Correo no corresponde a ningun usuario registrado" })
          } else {
              if (bcrypt.compareSync(password, user.password)) {
                  // Creamos el token
                  let token = jwt.sign({ user: user }, authConfig.secret, {
                      expiresIn: authConfig.expires
                  });

                  res.json({
                      user: user,
                      token: token
                  })

              } else {

                  // Unauthorized Access
                  res.status(401).json({ msg: "Contraseña incorrecta" })

              }

          }

      }).catch(err => {
          res.status(500).json(err);
      })

  }

  // Logout
  signOut(req, res) {

    // Buscar usuario
    try { 
      let tokenNew = jwt.sign({ user: 'out' }, authConfig.secret, {
          expiresIn: '1s'
      });
      return res.status(200).json({
        tokenNew: tokenNew,
        message: 'Sesión eliminada'
      })
    } catch (error) {
      throw error
    }

  }



  list = (req, res, next) => {
    return userService
      .getAll()
      .then(user => {
        return res.status(200).json(user)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return userService
      .getOne({
        id: req.params.id
      })
      .then(user => {
        return res.status(200).json(user)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }
}

module.exports = new userController()
