const fs = require('fs');
const path = require('path');
const db = require('../../database/models/index');
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

let usuarioController = {
    login: (req, res) => {
        res.render('login', {
            titulo: 'Login',
            css: 'estiloLogin.css'
        });
    },

    loginprocess: (req, res) => {
        
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].userEmail == req.body.usuariologin) {
                if (bcrypt.compareSync(req.body.contrasenialogin, userData[i].userContraseña)) { 
                    let usuarioLogeado = {
                        nombre: userData[i].userNombre,
                        apellido: userData[i].userApellido,
                        email: userData[i].userEmail,
                        avatar: userData[i].userAvatar
                    }

                    req.session.login = usuarioLogeado;

                    if (req.body.recordarme) {
                        res.cookie('userEmail', req.body.usuariologin, {maxAge: 1000 * 60 * 60 * 24});
                    }

                    return res.redirect('/');
                }
            }
        };

        let info = req.body.usuariologin;

        res.render('login', {
            error: 'Clave o Email incorrecto',
            infoemail: info,
            titulo: 'Login',
            css: 'estiloLogin.css'
        })
    },

    register: (req, res) => {
        res.render('register', {
            titulo: 'Registro',
            css: 'estiloRegistro.css'
        });
    },

    registerProcess: (req, res) => {
        let passwordEncriptada = bcrypt.hashSync(req.body.clave, 10);
        
        if(req.file)
            {var userAvatar = req.file.filename
            }
        else
            {var userAvatar = "generic_avatar.jpg";
            }
        
        let usuarioNuevo = {
            userNombre: req.body.nombre,
            userApellido:   req.body.apellido,
            userEmail: req.body.email,
            userContraseña: passwordEncriptada,
            userAvatar: userAvatar,
        }

        db.Usuario.create(usuarioNuevo);

        res.redirect('/login');
    },

    profile: (req, res) =>{

      res.render('profile', {
            titulo: 'Perfil',
            css: 'estiloProfile.css'
        })
    },

    editprofile: (req, res)=>{
        res.render('editarPerfil', {
            titulo: 'Editar perfil',
            css: 'estiloRegistro.css'
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = usuarioController;