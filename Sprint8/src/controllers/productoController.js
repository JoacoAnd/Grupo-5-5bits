const fs = require('fs');
const path = require('path');
const pathproductos = path.join(__dirname, '../../data/products.json');
const db = require('../../database/models/index');
const Op = db.Sequelize.Op;
const { validationResult } = require("express-validator");

let productoController = {

    listado: (req, res) => {

        let buscar = req.query.buscar;

        if (buscar != "" && buscar != undefined) {
            db.Producto.findAll({
                include: [{ association: "categoria" }],
                where: {
                    nombre: {
                        [Op.like]: `%${buscar}%`
                    }
                }
            })
                .then((productos) => {
                    res.render('listadoProductos', {
                        titulo: 'Listado de productos',
                        css: 'estiloListado.css',
                        productos: productos
                    });
                })
        } else {
            db.Producto.findAll({
                include: [{ association: "categoria" }]
            })
                .then((productos) => {
                    res.render('listadoProductos', {
                        titulo: 'Listado de productos',
                        css: 'estiloListado.css',
                        productos: productos
                    });
                })
        }
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
        let errors = validationResult(req);
        let talles = req.body.talles;

        if (!talles) {
            talles = [];
        }

        if (errors.isEmpty()) {
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
        } else {
            db.Talle.findAll()
                .then(talles => {
                    db.Categoria.findAll()
                        .then(categorias => {
                            res.render('create', {
                                titulo: 'Crear producto',
                                css: 'estiloProducto.css',
                                errors: errors.errors,
                                old: req.body,
                                categorias: categorias,
                                talles: talles
                            });
                        })
                })
        }

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
        let errors = validationResult(req);
        let talles = req.body.talles;

        if (!talles) {
            talles = [];
        }

        let imagen = req.body.imagenOriginal;

        if(req.file){
            imagen = req.file.filename; 
        }

        if (errors.isEmpty()) {
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

            db.ProductoTalle.destroy({
                where: {
                    fk_id_producto: req.params.id
                }
            });

            for (let i = 0; i < talles.length; i++) {
                db.ProductoTalle.create({
                    fk_id_producto: req.params.id,
                    fk_id_talle: talles[i]
                })
            }

            res.redirect('/products/' + req.params.id)
        } else {
            
            let producto = {
                ...req.body,
                id_producto: req.params.id,
                imagen: imagen
            }

            let tallesDelProducto = producto.talles.map(element => {
                return Number(element);
            });

            db.Talle.findAll()
                .then(talles => {
                    db.Categoria.findAll()
                        .then(categorias => {
                            res.render('editarProducto', {
                                titulo: 'Editar producto',
                                css: 'estiloProducto.css',
                                errors: errors.errors,
                                producto: producto,
                                tallesDelProducto: tallesDelProducto,
                                categorias: categorias,
                                talles: talles
                            });
                        })
                })
        }
    },

    delete: (req, res) => {

        db.Producto.destroy({
            where: { id_producto: req.params.id }
        })
        .then(()=>{
            db.ProductoTalle.destroy({
                where: {
                    fk_id_producto: req.params.id
                }
            })
            .then(()=>{
                res.redirect('/products');
            })
    
          
        })
        }

   

}

module.exports = productoController;