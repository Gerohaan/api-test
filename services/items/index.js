const {
    Items
} = require('../../models/index')
const dbModel = Items

async function getAll(filters) {
    return dbModel.findAll({
        where: {
            ...filters
        }
    }).catch(error => {
        return Promise.reject(error)
    })
}


async function getOne(filters) {
    return await dbModel.findOne({
        where: {
            ...filters
        }
    }).catch(error => {
        return Promise.reject(error)
    })
}



module.exports = {
    getAll,
    getOne
}