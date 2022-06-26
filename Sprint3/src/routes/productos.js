const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/detalleProducto', (req, res) => {
    res.sendFile(__dirname + '/views/detalleProducto.html')
})

module.exports = router;