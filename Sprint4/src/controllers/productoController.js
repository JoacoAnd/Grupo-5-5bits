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
    },

    edit: (req, res) => {
        let idProduct = req.params.id;
        let findProduct = dataproductos.find((e) => {
            return e.id == idProduct;
        });
        const categorias = [
            "Mujeres",
            "Hombres",
            "Niños",
            "Noche",
            "Casual",
            "Unisex",
        ];
        const talles = ["S", "M", "L", "XL", "XXL"];

        // res.send(JSON.stringify(findProduct));
        res.render("editarProducto", {
            titulo: "Editar Producto",
            css: "estiloProducto.css",
            categorias: categorias,
            talles: talles,
            producto: findProduct,
        });
    },

    edited: (req, res) => {

        console.log(req.body);

        let tallesclaves = [req.body.talleS, req.body.talleM, req.body.talleL, req.body.talleXL, req.body.talleXXL];
        
        let tallesEditados = [];

        for (let i = 0; i <= tallesclaves.length; i++) {
            if (tallesclaves[i] != undefined) {
                tallesEditados.push(tallesclaves[i])
            }
        }

        let editProducto = {
            id: parseInt(req.params.id),
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            talle: tallesEditados,
            precio: req.body.precio,
            imagen: req.body.imagen
        }

        for (let i = 0; i < dataproductos.length; i++) {
            if (dataproductos[i].id == editProducto.id) {
                dataproductos[i] = editProducto;
                break;
            }
        }

        fs.writeFileSync(pathproductos, JSON.stringify(dataproductos));
        res.redirect('/products/detalle/' + req.params.id);
    },

    delete: (req, res) => {},

}

module.exports = productoController;