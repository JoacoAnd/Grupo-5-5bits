const path = require('path');
const fs = require('fs');
const userDataPath = path.join(__dirname, '../../data/userData.json');
const userData = JSON.parse(fs.readFileSync(userDataPath));

function userLogged(req, res, next) {
    res.locals.isLogged = false;

    let cookieUsuario = req.cookies.userEmail;
    let findUserCookie = userData.find(usuario => {
        return usuario.userEmail == cookieUsuario
    });

    if (findUserCookie) {

        let usuarioLogeado = {
            nombre: findUserCookie.userNombre,
            apellido: findUserCookie.userApellido,
            email: findUserCookie.userEmail,
            avatar: findUserCookie.userAvatar
        }
        req.session.login = usuarioLogeado;
    }

    if (req.session.login) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.login;
    }

    next();
}

module.exports = userLogged;