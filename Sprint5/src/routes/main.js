let express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainController');
const usuarioController = require('../controllers/usuarioController');

// Obtenemos main 
router.get('/', mainController.main);

// Register 
router.get('/register', usuarioController.register);

// Login
router.get('/login', usuarioController.login);

// Obtenemos carrito de compra
router.get('/carrito', mainController.carrito);



module.exports = router;