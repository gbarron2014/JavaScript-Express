const User = require('../models/user')

module.exports = (req, res, next) => {
    console.log('Verificando Inicio de Sesión');
    User.findById(req.session.usuario, (error, user) => {
        if (error || !user)
            return res.redirect('/')
        next()
    })
};