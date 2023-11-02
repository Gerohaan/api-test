const itemsService = require('../../services/items')

class itemsValidator {
    exists = id => {
        return itemsService.getOne({
                id
            })
            .then(response => {
                return response !== null ? true : Promise.reject('El id no corresponde a ningún item registrado')
            })
    }
}
module.exports = new itemsValidator()