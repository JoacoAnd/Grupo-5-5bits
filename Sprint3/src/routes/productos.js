const express = require('express');
const router = express.Router();

router.get('/detalleProducto', (req, res) => {
    res.sendFile(__dirname + '/views/detalleProducto.html')
})

module.exports = router;