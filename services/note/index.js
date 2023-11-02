const { Note } = require('../../models/index')

async function store (params) {
  return Note
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
    try {
      return await Note.findAll({
        include: [
          {
            association: 'Customer'
          }
        ]
      })
    } catch (error) {
      throw error
    }
}

async function update (params, filters) {
  try {
    await Note.update(params, {
      where: { ...filters }
    })
    return await Note
    .findOne({
      where: { ...filters }
    })
  } catch (error) {
      throw error
  }
}

async function getOne (filters) {
  return Note
    .findOne({
      where: { ...filters },
      include: [
        {
          association: 'Customer'
        }
      ]
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  try {
    return Note.destroy({
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
