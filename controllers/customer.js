const customerService = require('../services/customer') 

class customerController {

  list = (req, res, next) => {
    return customerService
      .getAll()
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return customerService
      .getOne({
        id: req.params.id
      })
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

}
module.exports = new customerController()
