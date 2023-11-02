const { NoteItems } = require('../../models/index')

async function store (params) {
  return NoteItems
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
    try {
      return await NoteItems.findAll({
        include: [
          {
            association: 'note'
          },
          {
            association: 'items'
          }
        ]
      })
    } catch (error) {
      throw error
    }
}

async function update (params, filters) {
  try {
    await NoteItems.update(params, {
      where: { ...filters }
    })
    return await NoteItems
    .findOne({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

async function getOne (filters) {
  return NoteItems
    .findOne({
      where: { ...filters },
      include: [
        {
          association: 'note'
        },
        {
          association: 'items'
        }
      ]
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  try {
    return NoteItems.destroy({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  destroy
}
