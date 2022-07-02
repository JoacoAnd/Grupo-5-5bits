const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/', productoController.producto);
router.get('/detalle', productoController.detalleProducto);

module.exports = router;