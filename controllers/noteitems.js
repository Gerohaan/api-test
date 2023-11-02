const noteItemsService = require('../services/note')

class noteItemsController {
  create = (req, res, next) => {
    return noteItemsService
      .store(req.body)
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return noteItemsService
      .getAll()
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return noteItemsService
      .getOne({
        id: req.params.id
      })
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return noteItemsService
      .update(req.body, {
        id: req.params.id
      })
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  
  async update2 (req, res, next) {
    try {
      await noteItemsService.update2(req.body, {
        id: req.params.id
      })
      let data = await noteItemsService.getOne({
        id: req.params.id
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  delete = (req, res, next) => {
    return noteItemsService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        res.status(200).json({ success: 'Item de la nota de venta eliminado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new noteItemsController()
