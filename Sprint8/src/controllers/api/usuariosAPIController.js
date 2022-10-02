const db = require('../../../database/models/index');
const Op = db.Sequelize.Op;

let usuariosAPIController = {

    'listado': (req, res) => {
        db.Usuario.findAll()

       
        .then(usuarios => {

                for (let i = 0; i < usuarios.length; i++) {
                    usuarios[i].dataValues.imagen= 'http://localhost:3000/images/usersProfilePhotos/' + usuarios[i].dataValues.imagen;
                    
                }

                respuesta = {
                    meta: {
                        status: 200,
                        total: usuarios.length,
                        url: 'api/usuarios'
                    },
                    data: usuarios
                }

                res.json(respuesta);
            })

            .catch(error => {
                let respuesta = {
                    meta: {
                        status: 404,
                        msg: 'Not Found',
                        url: 'api/usuarios'
                    }
                }

                res.json(respuesta);

            })
    },

    'unUsuario': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(usuarios => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/usuarios/:id'
                    },
                    data: usuarios
                }
                res.json(respuesta);
            })

            .catch(error => {
                let respuesta = {
                    meta: {
                        status: 404,
                        msg: 'Not Found',
                        url: 'api/usuarios'
                    }
                }

                res.json(respuesta);

            })
    },
}

module.exports = usuariosAPIController;
