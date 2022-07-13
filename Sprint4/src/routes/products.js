const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Listado productos
router.get('/', productoController.listado);

// Producto especifico
router.get('/detalle/:id', productoController.detalleProducto);

// Crear producto
router.get('/create', productoController.create)
router.post('/create', productoController.store);

// Editar producto
// router.get('/:id/edit', productoController.edit);
// router.put('/:id', productoController.edited)

// Borrar producto (accion)

// router.delete('/:id', productoController.delete);

module.exports = router;

/* 
1. /products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado
*/











/* 
1. /products (GET)
Listado de productos
2. /products/create (GET)
Formulario de creación de productos
3. /products/:id (GET)
Detalle de un producto particular
4. /products (POST)
Acción de creación (a donde se envía el formulario)
5. /products/:id/edit (GET)
Formulario de edición de productos
6. /products/:id (PUT)
Acción de edición (a donde se envía el formulario):
7. /products/:id (DELETE)
Acción de borrado
*/