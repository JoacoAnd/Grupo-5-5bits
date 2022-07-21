const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const productoController = require('../controllers/productoController');

// Multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, '../../public/images');
        cb(null, folder);
    },

    filename: (req, file, cb) => {
        let nombreImagen = 'img-' + Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen);
    }
})

const uploadFile = multer({storage});

// Listado productos
router.get('/', productoController.listado);

// Producto especifico
router.get('/detalle/:id', productoController.detalleProducto);

// Crear producto
router.get('/create', productoController.create)
router.post('/', uploadFile.single('imagen') ,productoController.store);

// Editar producto
router.get('/:id/edit', productoController.edit);
router.put('/:id', productoController.edited)

// Borrar producto (accion)

router.delete('/:id', productoController.delete);

module.exports = router;