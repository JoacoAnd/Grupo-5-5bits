const fs = require("fs");
const path = require("path");
const db = require("../../database/models/index");
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

let usuarioController = {
  login: (req, res) => {
    res.render("login", {
      titulo: "Login",
      css: "estiloLogin.css",
    });
  },

  loginprocess: (req, res) => {

    let loginValidationResult = validationResult(req);

    if (loginValidationResult.errors.length > 0) {
      return res.render('login', {
        errores: loginValidationResult.mapped(),
        oldData: req.body,
        titulo: "Login",
        css: "estiloLogin.css"
      })
    }

    db.Usuario.findOne({
      where: {
        userEmail: req.body.usuarioLogin
      }
    }).then((usuario) => {
      if (
        bcrypt.compareSync(
          req.body.contraseniaLogin,
          usuario.userPassword
        )
      ) {
        let usuarioLogeado = {
          id_usuario: usuario.id_usuario,
          nombre: usuario.userNombre,
          apellido: usuario.userApellido,
          email: usuario.userEmail,
          avatar: usuario.userAvatar,
          rol: usuario.userRol         
        };

        req.session.login = usuarioLogeado;

        if (req.body.recordarme) {
          res.cookie("userCookie", usuarioLogeado, {
            maxAge: 1000 * 60 * 60 * 24,
          });
        }

        return res.redirect("/");
      } else {
        res.render('login', {
          error: 'Clave o Email incorrecto',
          oldData: req.body,
          titulo: 'Login',
          css: 'estiloLogin.css'
        })

      }
    }

    )
      .catch(() => {
        res.render('login', {
          error: 'Clave o Email incorrecto',
          oldData: req.body,
          titulo: 'Login',
          css: 'estiloLogin.css'
        })
      }
      )
      ;
  },

  register: (req, res) => {
    res.render("register", {
      titulo: "Registro",
      css: "estiloRegistro.css",
    });
  },

  registerProcess: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let passwordEncriptada = bcrypt.hashSync(req.body.clave, 10);

      let userAvatar;
      
      if (req.file) {
        userAvatar = req.file.filename;
      } else {
        userAvatar = "generic_avatar.jpg";
      }

      db.Usuario.create({
        userNombre: req.body.nombre,
        userApellido: req.body.apellido,
        userEmail: req.body.email,
        userPassword: passwordEncriptada,
        userAvatar: userAvatar
      });

      res.redirect("/login");
    } else {
      res.render("register", {
        errors: errors.errors,
        old: req.body,
        titulo: "Registro",
        css: "estiloRegistro.css",
      })
    }
  },

  profile: (req, res) => {
    res.render("profile", {
      titulo: "Perfil",
      css: "estiloProfile.css",
    });
  },

  editprofile: (req, res) => {
    db.Usuario.findByPk(req.params.id)
      .then(usuario => {
        res.render("editarPerfil", {
          titulo: "Editar perfil",
          css: "estiloRegistro.css",
          usuario: usuario
        });
      })
  },

  editedprofile: (req, res) => {
    let passwordEncriptada = bcrypt.hashSync(req.body.clave, 10);
    
    let updatePhoto;
    if (req.file) {
      updatePhoto = req.file.filename;
    } 

    db.Usuario.update({
      userNombre: req.body.nombre,
      userApellido: req.body.apellido,
      userEmail: req.body.email,
      userPassword: passwordEncriptada,
      userAvatar: updatePhoto
    }, {
      where: {
        id_usuario: req.params.id
      }
    })
    .then( async () => {
      await db.Usuario.findOne({
        where: {
          id_usuario: req.params.id
        }
      })
      .then(usuario => {
        res.clearCookie("userCookie");
        let userUpdated = {
          id_usuario: usuario.id_usuario,
          nombre: usuario.userNombre,
          apellido: usuario.userApellido,
          email: usuario.userEmail,
          avatar: usuario.userAvatar,
          rol: usuario.userRol         
        };

        req.session.login = userUpdated;
        res.redirect("/perfil")
      })
    });

  },

  logout: (req, res) => {
    res.clearCookie("userCookie");
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = usuarioController;
