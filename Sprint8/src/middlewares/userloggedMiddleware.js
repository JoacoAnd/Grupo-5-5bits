const db = require('../../database/models/index');

function userLogged(req, res, next) {

    res.locals.isLogged = false;

    let cookieUsuario = req.cookies.userCookie;

    if (cookieUsuario) {
        req.session.login = cookieUsuario;
    }

    if (req.session.login) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.login;
    } 

    next();
}

module.exports = userLogged;