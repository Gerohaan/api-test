const { User } = require('../../models/index')

async function getAll (filters) {
    try {
      return await User.findAll()
    } catch (error) {
      throw error
    }
}

async function getOne (filters) {
  return User
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}



module.exports = {
  
  getAll,
  getOne
}
