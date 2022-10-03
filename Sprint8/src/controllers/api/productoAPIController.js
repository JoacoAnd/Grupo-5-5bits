const db = require('../../../database/models/index');
const Op = db.Sequelize.Op;
const sequelize = require('sequelize');

let productoAPIController = {

    'listado': (req, res) => {

        db.Producto.findAll({
            
            include: ['categoria'],
            
            attributes: [sequelize.col('categoria.categoria'),
                [sequelize.fn('count', 'id_producto'),'cuantasCategorias']],
            group: ["fk_id_categoria"]
        })

            .then(function (categorias) {
                //console.log(categorias);
                console.log(categorias[0]);

                res.json(categorias);
            });


        /*db.Producto.findAll({
            include: ['talles', 'categoria']
        })
            .then(productos => {

                for (let i = 0; i < productos.length; i++) {
                    productos[i].dataValues.imagen = 'http://localhost:3000/images/' + productos[i].dataValues.imagen;
                }

                respuesta = {
                    meta: {
                        status: 200,
                        total: productos.length,
                        url: 'api/products'
                    },
                    data: productos
                }

                res.json(respuesta);
            })

            .catch(error => {
                let respuesta = {
                    meta: {
                        status: 404,
                        msg: 'Not Found',
                        url: 'api/products'
                    }
                }

                res.json(respuesta);

            })*/
    },

    'unProducto': (req, res) => {
        db.Producto.findByPk(req.params.id,
            {
                include: ['talles', 'categoria']
            })
            .then(productos => {
                productos.dataValues.imagen = 'http://localhost:3000/images/' + productos.dataValues.imagen;
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/products/:id'
                    },
                    data: productos
                }
                res.json(respuesta);
            })

            .catch(error => {
                let respuesta = {
                    meta: {
                        status: 404,
                        msg: 'Not Found',
                        url: 'api/products'
                    }
                }

                res.json(respuesta);

            })
    },
}

module.exports = productoAPIController;
