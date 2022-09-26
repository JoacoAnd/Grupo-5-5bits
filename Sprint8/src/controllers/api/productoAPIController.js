
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
    },
}

module.exports = productoAPIController;
