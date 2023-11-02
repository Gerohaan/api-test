const noteService = require('../services/note')

class noteController {
  create = (req, res, next) => {
    return noteService
      .store(req.body)
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return noteService
      .getAll()
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return noteService
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
    return noteService
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
      await noteService.update2(req.body, {
        id: req.params.id
      })
      let data = await noteService.getOne({
        id: req.params.id
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  delete = (req, res, next) => {
    return noteService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        res.status(200).json({ success: 'Nota eliminada' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new noteController()
