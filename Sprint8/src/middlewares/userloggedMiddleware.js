const db = require('../../database/models/index');

function userLogged(req, res, next) {
    res.locals.isLogged = false;
    /*
    let cookieUsuario = req.cookies.userEmail;

    if (cookieUsuario && !res.locals.isLogged) {
        db.Usuario.findOne({
            where: {
                userEmail: cookieUsuario
            }
        })
            .then(usuario => {
                if (usuario) {
                    let usuarioLogeado = {
                        nombre: usuario.userNombre,
                        apellido: usuario.userApellido,
                        email: usuario.userEmail,
                        avatar: usuario.userAvatar,
                        rol: usuario.userRol
                    }
                    req.session.login = usuarioLogeado;
                }
            })
    }*/

    if (req.session.login) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.login;
    }

    next();
}

module.exports = userLogged;