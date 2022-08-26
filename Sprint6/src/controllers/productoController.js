const fs = require('fs');
const path = require('path');
const pathproductos = path.join(__dirname, '../../data/products.json');
const dataproductos = JSON.parse(fs.readFileSync(pathproductos));
const db = require('../../database/models/index')

function generateId() {
    let allProducts = dataproductos;
    let lastProduct = allProducts.pop();
    if (lastProduct) {
        return lastProduct.id + 1;
    }
    return 1;
};



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
        });

        if (productoEncontrado) {
            res.render('detalleProducto', {
                titulo: 'Detalle del Producto',
                css: 'estiloDetalleProducto.css',
                producto: productoEncontrado
            });

        }
        else {
            res.render('notFound', {
                titulo: 'No existe el artículo',
                css: 'estiloNotFound.css',
                id: req.params.id
            });
        }

    },

    create: (req, res) => {

        db.Talle.findAll()
        .then(talles =>{
            db.Categoria.findAll()
            .then(categorias =>{
                res.render('create', {
                    titulo: 'Crear producto',
                    css: 'estiloProducto.css',
                    categorias: categorias,
                    talles: talles
                });
            })
        })
    },

    store: (req, res) => {
        
        db.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            precio: req.body.precio,
            imagen: req.file.filename
        });

        /* Codigo viejo
        
        let tallesclaves = [req.body.talleS, req.body.talleM, req.body.talleL, req.body.talleXL, req.body.talleXXL];
        let talles = [];
        for (let i = 0; i <= tallesclaves.length; i++) {
            if (tallesclaves[i] != undefined) {
                talles.push(tallesclaves[i])
            }
        }

        dataproductos.push(productoNuevo);
        fs.writeFileSync(pathproductos, JSON.stringify(dataproductos));

        res.redirect('/')*/
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

        let tallesclaves = [req.body.talleS, req.body.talleM, req.body.talleL, req.body.talleXL, req.body.talleXXL];

        let tallesEditados = [];

        for (let i = 0; i <= tallesclaves.length; i++) {
            if (tallesclaves[i] != undefined) {
                tallesEditados.push(tallesclaves[i])
            }
        }

        if (req.file) {
            var imagen = req.file.filename;
        }
        else {
            var imagen = req.body.imagenOriginal;
        }



        let editProducto = {
            id: parseInt(req.params.id),
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            talle: tallesEditados,
            precio: req.body.precio,
            imagen: imagen
        }

        for (let i = 0; i < dataproductos.length; i++) {
            if (dataproductos[i].id == editProducto.id) {
                dataproductos[i] = editProducto;
                break;
            }
        }

        fs.writeFileSync(pathproductos, JSON.stringify(dataproductos));
        res.redirect('/products/' + req.params.id);
    },

    delete: (req, res) => {

        for (let i = 0; i < dataproductos.length; i++) {
            if (dataproductos[i].id == req.params.id) {
                dataproductos.splice(i, 1);
                break;
            }
        }

        fs.writeFileSync(pathproductos, JSON.stringify(dataproductos));


        res.redirect('/products')
    }

}

module.exports = productoController;