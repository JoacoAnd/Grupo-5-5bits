const fs = require('fs');
const path = require('path');
const pathproductos = path.join(__dirname, '../../data/products.json');
const dataproductos = JSON.parse(fs.readFileSync(pathproductos));

let productoController = {

    listado: (req, res) => {
        res.render('listadoProductos', {
            titulo: 'Listado de productos',
            css: 'estiloHome.css',
            productos: dataproductos
        });
    },

    detalleProducto: (req, res) => {
        let productoEncontrado = dataproductos.find(x => {
            return x.id == req.params.id;
        })
        let tallesDisponibles = [];

        if (productoEncontrado.talle_s == "S") {
            tallesDisponibles.push('S');
        }
        if (productoEncontrado.talle_m == "S") {
            tallesDisponibles.push('M');
        }
        if (productoEncontrado.talle_l == "S") {
            tallesDisponibles.push('L');
        }
        if (productoEncontrado.talle_xl == "S") {
            tallesDisponibles.push('XL');
        }
        if (productoEncontrado.talle_xl == "S") {
            tallesDisponibles.push('XL');
        }

        res.render('detalleProducto', {
            titulo: 'Detalle del Producto',
            css: 'estiloDetalleProducto.css',
            producto: productoEncontrado,
            talles: tallesDisponibles
        });
    },

    create: (req, res) => {
        res.render('create', {
            titulo: 'Crear producto',
            css: 'estiloProducto.css',
            categorias: ['Mujeres', 'Hombres', 'Niños', 'Noche', 'Casual', 'Unisex'],
            talles: ['S', 'M', 'L', 'XL', 'XXL']
        });
    },

    store: (req, res) => {
        console.log(req.body);
        let productoNuevo = {
            id: dataproductos.id + 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria
        }
    }

}

module.exports = productoController;