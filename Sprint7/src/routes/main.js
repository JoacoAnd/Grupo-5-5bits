let express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainController');
const usuarioController = require('../controllers/usuarioController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const loginValidations = require("../middlewares/loginValidations");
const registerValidations = require("../middlewares/registerValidations");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, path.join(__dirname, '../../public/images/usersProfilePhotos'));
    },
	filename: (req, file, callback) => {
        const newFileName = 'avatar-' + Date.now() + path.extname(file.originalname);
		callback(null, newFileName)
    }
});

const uploadFile = multer({ storage: storage });


// Obtenemos main 
router.get('/', mainController.main);

// Register 
router.get('/register', guestMiddleware, usuarioController.register);

router.post('/register', uploadFile.single('userprofilephotos'), registerValidations, usuarioController.registerProcess);

// Login
router.get('/login', guestMiddleware, usuarioController.login);
router.post('/login', loginValidations, usuarioController.loginprocess);

// Profile
router.get('/perfil', authMiddleware, usuarioController.profile);
router.get('/perfil/editar/:id', usuarioController.editprofile);
router.post('/perfil/editar/:id', uploadFile.single('updateprofilephoto'), usuarioController.editedprofile);

// Obtenemos carrito de compra
router.get('/carrito', mainController.carrito);

// Logout
router.get('/logout', usuarioController.logout);


module.exports = router;