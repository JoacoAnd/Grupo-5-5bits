const db = require('../../database/models/index');

function updateProfileAuth(req, res, next) {
    
    // Si no esta logueado, no permite entrar
    if (!req.session.login) {
        res.redirect('/login');
    }

    let updateID = req.params.id;

    db.Usuario.findOne({
        where: {
            userEmail: req.session.login.email
        }
    })
    .then((usuario) =>{
        if (usuario.id_usuario != updateID) {
            res.redirect(`/perfil/editar/${usuario.id_usuario}`)
        }
    });

    next();
}

module.exports = updateProfileAuth;