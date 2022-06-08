// Librerías, módulos, variables, etc.

const express = require('express');

const app = express();
const puerto = 3000;


// Configuración del servidor

app.use('/', express.static(__dirname + '/public/'))
app.use('/imagenes', express.static(__dirname + '/public/images'))

// Rutas

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})


app.get('/detalleProducto', (req, res) => {
    res.sendFile(__dirname + '/views/detalleProducto.html')
})

app.get('/carritoCompras', (req, res) => {
    res.sendFile(__dirname + '/views/carritoCompras.html')
})

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/views/registro.html')
})


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})


// Levantar el server

app.listen(puerto, () => {
    console.log("servidor corriendo en el puerto " + puerto);
})