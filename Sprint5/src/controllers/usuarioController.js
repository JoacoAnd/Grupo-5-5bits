const fs = require('fs');
const path = require('path');
const userDataPath = path.join(__dirname, '../../data/userData.json');
const userData = JSON.parse(fs.readFileSync(userDataPath));
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
                    res.redirect('/');
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

    profile: (req, res) =>{
        res.render('profile', {
            titulo: 'Perfil',
            css: 'estiloHome.css'
        })
    }
}

module.exports = usuarioController;