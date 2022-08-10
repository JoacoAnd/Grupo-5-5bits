let express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainController');
const usuarioController = require('../controllers/usuarioController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Obtenemos main 
router.get('/', mainController.main);

// Register 
router.get('/register', guestMiddleware, usuarioController.register);

// Login
router.get('/login', guestMiddleware, usuarioController.login);
router.post('/login', usuarioController.loginprocess);

// Profile
router.get('/perfil', authMiddleware, usuarioController.profile);

// Obtenemos carrito de compra
router.get('/carrito', mainController.carrito);

// Logout
router.get('/logout', usuarioController.logout);


module.exports = router;