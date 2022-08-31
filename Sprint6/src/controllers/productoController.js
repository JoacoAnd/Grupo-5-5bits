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
        let detalleID = req.params.id;

        db.Producto.findByPk(detalleID, {
            include: [{ association: "categoria" }, { association: "talles" }]
        })
            .then((productoEncontrado) => {
                res.render('detalleProducto', {
                    titulo: 'Detalle del Producto',
                    css: 'estiloDetalleProducto.css',
                    producto: productoEncontrado,
                    talles: productoEncontrado.talles
                });
            })
            .catch(() => {
                res.render('notFound', {
                    titulo: 'No existe el artículo',
                    css: 'estiloNotFound.css',
                    id: req.params.id
                });
            })
    },

    create: (req, res) => {
        db.Talle.findAll()
            .then(talles => {
                db.Categoria.findAll()
                    .then(categorias => {
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

        let talles = req.body.talles;

        db.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fk_id_categoria: req.body.categoria,
            precio: req.body.precio,
            imagen: req.file.filename
        }).then((producto) => {
            for (let i = 0; i < talles.length; i++) {
                db.ProductoTalle.create({
                    fk_id_producto: producto.id_producto,
                    fk_id_talle: talles[i]
                })
            }

            res.redirect('/products')
        });
    },

    edit: (req, res) => {
        let idProduct = req.params.id;

        db.Producto.findByPk(idProduct, {
            include: [{ association: "categoria" }, { association: "talles" }]
        }).then((producto) => {
            let tallesDelProducto = producto.talles.map(element => {
                return element.id_talle
            });
            db.Categoria.findAll()
                .then((categorias) => {
                    db.Talle.findAll()
                        .then(talles => {
                            res.render("editarProducto", {
                                titulo: "Editar Producto",
                                css: "estiloProducto.css",
                                producto: producto,
                                categorias: categorias,
                                talles: talles,
                                tallesDelProducto: tallesDelProducto
                            })
                        })
                })
        }
        )
    },

    edited: (req, res) => {

        if (req.file) {
            var imagen = req.file.filename;
        }
        else {
            var imagen = req.body.imagenOriginal;
        }

        let talles = req.body.talles;

        db.Producto.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fk_id_categoria: req.body.categoria,
            precio: req.body.precio,
            imagen: imagen
        }, {
            where: {
                id_producto: req.params.id
            }
        })

        res.redirect('/products/' + req.params.id)
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