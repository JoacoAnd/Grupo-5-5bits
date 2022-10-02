const express = require('express');
const router = express.Router();
const path = require('path');
const usuariosAPIController = require('../../controllers/api/usuariosAPIController');

// Listado productos
router.get('/', usuariosAPIController.listado);

// Producto especifico
router.get('/:id', usuariosAPIController.unUsuario);

module.exports = router;
