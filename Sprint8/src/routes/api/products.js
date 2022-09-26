const express = require('express');
const router = express.Router();
const path = require('path');
const productoAPIController = require('../../controllers/api/productoAPIController');

// Listado productos
router.get('/', productoAPIController.listado);

// Producto especifico
//router.get('/:id', productoAPIController.unProducto);

module.exports = router;
