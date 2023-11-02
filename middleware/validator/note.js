const noteService = require('../../services/note')

class noteValidator {
    exists = id => {
        return noteService.getOne({
                id
            })
            .then(response => {
                return response !== null ? true : Promise.reject('El id no corresponde a ningúna nota de venta registrada')
            })
    }
}
module.exports = new noteValidator()