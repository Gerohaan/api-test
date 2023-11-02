const noteItemsService = require('../../services/noteItems')

class noteItemsValidator {
    exists = id => {
        return noteItemsService.getOne({
                id
            })
            .then(response => {
                return response !== null ?
                    true :
                    Promise.reject('Este item de la nota de venta no existe')
            })
    }
}
module.exports = new noteItemsValidator()