// Librerías, módulos, variables, etc.

const express = require('express');
const app = express();
const puerto = 3000;
const rutasMain = require('./src/routes/main.js');
const rutasProductos = require('./src/routes/productos.js');
const rutasRegister = require('./src/routes/register.js');
const rutasLogin = require('./src/routes/login.js');
const rutasCarrito = require('./src/routes/carrito.js');

// Configuración plantillas
app.set('view engine', 'ejs')
    //app.use('/', express.static(__dirname + '/public/'));
app.use('/imagenes', express.static(__dirname + '/public/images'))
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('home')
    res.render('carritoCompras')
    res.render('detalleProducto')
    res.render('login')
    res.render('registro')
})


// Configuración del servidor

app.use('/', rutasMain);
app.use('/productos', rutasProductos);
app.use('/register', rutasRegister);
app.use('/login', rutasLogin);
app.use('/carrito', rutasCarrito);


// Levantar el server

app.listen(puerto, () => {
    console.log("servidor corriendo en el puerto " + puerto);
})