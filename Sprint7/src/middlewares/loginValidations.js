const { body } = require("express-validator");

const loginValidations = [
    body('usuarioLogin')
        .notEmpty().withMessage('Ingrese un Email').bail()
        .isEmail().withMessage("Escriba un formato de correo electrónico válido"),

    body('contraseniaLogin')
    .notEmpty().withMessage('Ingrese la contraseña')
];

module.exports = loginValidations;