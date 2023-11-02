const itemsService = require('../services/items') 

class itemsController {

  list = (req, res, next) => {
    return itemsService
      .getAll()
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return itemsService
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
module.exports = new itemsController()
