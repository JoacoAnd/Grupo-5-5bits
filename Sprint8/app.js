// Librerías, módulos, variables, etc.

const express = require('express');
const app = express();
const cors = require("cors");
const puerto = 3000;
const methodOverride = require('method-override');
const rutasMain = require('./src/routes/main.js');
const rutasProducto = require('./src/routes/products.js');
const apiRutasProducto = require('./src/routes/api/products.js');
const apiRutasUsuarios = require('./src/routes/api/usuarios.js');
const session = require('express-session');
const userLogged = require('./src/middlewares/userloggedMiddleware');
const adminMiddleware = require('./src/middlewares/adminMiddleware');
const cookies = require('cookie-parser');


// Configuración plantillas

app.use(session(
    {secret: 'Secreto',
    resave: false,
    saveUninitialized: false}));
app.use(cookies());
app.use(cors());
app.use(userLogged);
app.use(adminMiddleware)
app.set('view engine', 'ejs');
    //app.use('/', express.static(__dirname + '/public/'));
app.use('/imagenes', express.static(__dirname + '/public/images'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Configuración del servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', rutasMain);
app.use('/products', rutasProducto);
app.use('/api/products', apiRutasProducto);
app.use('/api/usuarios', apiRutasUsuarios);

// Ruta de page not found (404)

app.use((req,res,next) => {

    res.status(404).render('notFound',{
        titulo: 'Not Found',
        css: 'estiloNotFound.css'
    });

});

// Levantar el server

app.listen(puerto, () => {
    console.log("servidor corriendo en el puerto " + puerto);
})
