const { body } = require("express-validator");
const db = require("../../database/models/index");

const registerValidations = [
    body('nombre')
        .notEmpty().withMessage("Debes ingresar un nombre").bail()
        .isLength({ min: 2 }).withMessage("Debe tener un minimo de dos caracteres"),

    body('apellido')
        .notEmpty().withMessage("Debes ingresar un apellido").bail()
        .isLength({ min: 2 }).withMessage("Debe tener un minimo de dos caracteres"),

    body('email')
        .notEmpty().withMessage("Debes ingresar un email").bail()
        .isEmail().withMessage("Debe ser un email valido").bail()
        .custom(async (value) => {
            return db.Usuario.findOne({
                where: {
                    userEmail: value
                }
            }).then(user =>{
                if (user) {
                    return Promise.reject("Email uso");
                } 
            })
        }).withMessage("Este email ya esta en uso"),

    body('clave')
        .trim()
        .notEmpty().withMessage("Debes ingresar una clave").bail()
        .isLength({ min: 8 }).withMessage("La clave debe tener como minimo 8 caracteres").bail(),

    body('re-clave')
        .trim()
        .notEmpty().withMessage("Debes confirmar la clave").bail()
        .custom( (value, { req }) => {
            let clave = req.body.clave;
            return clave == value
        }).withMessage("Las contrasenias no coinciden"),

        body('userprofilephotos')
        .custom((value, { req })=>{
            console.log(req.file);
            if (!req.file) {
                return 'noimage'
            }

            if(req.file.mimetype === 'image/png' || req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/jpg'){
                return '.png'; 
            }else{
                return false; 
            }
            
        }).withMessage("Solo subir imagenes en formatos: png, jpg o jpeg")
    
];

module.exports = registerValidations;