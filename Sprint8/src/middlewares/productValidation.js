const { body } = require("express-validator");

const productValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("Debes ingresar un nombre").bail()
    .isLength({ min: 5 })
    .withMessage("Debes ingresar un mínimo de 5 caracteres"),

  body("descripcion")
    .notEmpty()
    .isLength({ min: 15 })
    .withMessage("Descripcion debe tener al menos 15 caracteres"),

    body("categoria")
    .notEmpty()
    .withMessage("Debes  ingresar una categoria"),

  body("precio")
  .notEmpty()
  .withMessage("El producto debe tener un precio"),

  body('imagen')
  .custom((value, { req })=>{
    //  console.log(req.file);
      if (!req.file) {
        throw new Error('Tenes que subir una imagen')
      }

      if(req.file.mimetype === 'image/png' || req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/jpg'){
          return '.png'; 
      }else{
          return false; 
      }
      
  }).withMessage("Debes subir una imagen con uno de los siguientes formatos: png, jpg o jpeg")

];

module.exports = productValidation;
