// Librerías, módulos, variables, etc.

const express = require('express');
const app = express();
const puerto = 3000;
const rutasMain = require('./src/routes/main.js');
const rutasProducto = require('./src/routes/products.js');

// Configuración plantillas
app.set('view engine', 'ejs')
    //app.use('/', express.static(__dirname + '/public/'));
app.use('/imagenes', express.static(__dirname + '/public/images'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use(express.static('public'));

// Configuración del servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', rutasMain);
app.use('/products', rutasProducto);

// Levantar el server

app.listen(puerto, () => {
    console.log("servidor corriendo en el puerto " + puerto);
})