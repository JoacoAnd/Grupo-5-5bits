
const db = require('../../../database/models/index');
const Op = db.Sequelize.Op;

let productoAPIController = {

  'listado': (req, res) => {
    db.Producto.findAll({
        include: ['talles']
    })
    .then(productos => {
        let respuesta = {
            meta: {
                status : 200,
                total: productos.length,
                url: 'api/products'
            },
            data: productos
        }
            res.json(respuesta);
        })

      .catch(error =>
        {let respuesta = {
            meta: {
                status : 404,
                msg: 'Not Found' ,
                url: 'api/products'
            }
        }

        res.json(respuesta);

      })
    },

    'unProducto': (req, res) => {
        db.Producto.findByPk(req.params.id,
            {
                include : ['talles']
            })
            .then(productos => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/products/:id'
                    },
                    data: productos
                }
                res.json(respuesta);
            })

            .catch(error =>
              {let respuesta = {
                  meta: {
                      status : 404,
                      msg: 'Not Found' ,
                      url: 'api/products'
                  }
              }

              res.json(respuesta);

            })
    },
}

module.exports = productoAPIController;
