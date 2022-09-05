const fs = require("fs");
const path = require("path");
const db = require("../../database/models/index");
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

let usuarioController = {
  login: (req, res) => {
    res.render("login", {
      titulo: "Login",
      css: "estiloLogin.css",
    });
  },

  loginprocess: (req, res) => {
    db.Usuario.findAll().then((usuarios) => {
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i] == req.body.usuariologin) {
          if (
            bcrypt.compareSync(
              req.body.contrasenialogin,
              usuarios[i].userPassword
            )
          ) {
            let usuarioLogeado = {
              nombre: usuarios[i].userNombre,
              apellido: usuarios[i].userApellido,
              email: usuarios[i].userEmail,
              avatar: usuarios[i].userAvatar,
            };

            req.session.login = usuarioLogeado;

            if (req.body.recordarme) {
              res.cookie("userEmail", req.body.usuariologin, {
                maxAge: 1000 * 60 * 60 * 24,
              });
            }

            return res.redirect("/");
          } 
        }
      }
    });
    
    let info = req.body.usuariologin;

        res.render('login', {
            error: 'Clave o Email incorrecto',
            infoemail: info,
            titulo: 'Login',
            css: 'estiloLogin.css'
        })
  },

  register: (req, res) => {
    res.render("register", {
      titulo: "Registro",
      css: "estiloRegistro.css",
    });
  },

  registerProcess: (req, res) => {
    let passwordEncriptada = bcrypt.hashSync(req.body.clave, 10);

    if (req.file) {
      var userAvatar = req.file.filename;
    } else {
      var userAvatar = "generic_avatar.jpg";
    }

    db.Usuario.create({
      userNombre: req.body.nombre,
      userApellido: req.body.apellido,
      userEmail: req.body.email,
      userPassword: passwordEncriptada,
      userAvatar: userAvatar,
    });

    res.redirect("/login");
  },

  profile: (req, res) => {
    res.render("profile", {
      titulo: "Perfil",
      css: "estiloProfile.css",
    });
  },

  editprofile: (req, res) => {
    res.render("editarPerfil", {
      titulo: "Editar perfil",
      css: "estiloRegistro.css",
    });
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = usuarioController;
