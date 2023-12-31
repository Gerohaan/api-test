const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const { User } = require("../models/index");

module.exports = (req, res, next) => {
    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {

        // Comprobar la validez del token
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });

            } else {
                
                User.findByPk(decoded.user.id).then(user => {
                    req.user = user;
                    next();

                })


                
            }

        })
        
        
    }

   

}