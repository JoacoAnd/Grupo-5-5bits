const fs = require('fs');
const path = require('path');
const pathproductos = path.join(__dirname, '../../data/products.json');
const dataproductos = JSON.parse(fs.readFileSync(pathproductos));

let productoController = {

    listado: (req, res) => {
        res.render('listadoProductos', {
            titulo: 'Listado de productos',
            css: 'estiloListado.css',
            productos: dataproductos
        });
    },

    detalleProducto: (req, res) => {
        let productoEncontrado = dataproductos.find(x => {
            return x.id == req.params.id;
        })
        productoEncontrado.talle;
        res.render('detalleProducto', {
            titulo: 'Detalle del Producto',
            css: 'estiloDetalleProducto.css',
            producto: productoEncontrado
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
        let tallesclaves = [req.body.talleS, req.body.talleM, req.body.talleL, req.body.talleXL, req.body.talleXXL];
        let talles = [];
        for (let i = 0; i <= tallesclaves.length; i++) {
            if (tallesclaves[i] != undefined) {
                talles.push(tallesclaves[i])
            }
        }

        let productoNuevo = {
            id: dataproductos.length + 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            talle: talles,
            precio: req.body.precio,
            imagen: req.file.filename
        }

        dataproductos.push(productoNuevo);
        fs.writeFileSync(pathproductos, JSON.stringify(dataproductos));

        res.redirect('/')
    }

}

module.exports = productoController;