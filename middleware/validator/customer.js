const customerService = require('../../services/customer')

class customerValidator {
    exists = id => {
        return customerService.getOne({
                id
            })
            .then(response => {
                return response !== null ? true : Promise.reject('El id no corresponde a ningún customer registrado')
            })
    }
}
module.exports = new customerValidator()