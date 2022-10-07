const db = require('../../database/models/index');
const Op = db.Sequelize.Op;

let mainController = {
    main: (req, res) => {
        db.Producto.findAll({
            include: [{ association: "categoria" }]
        })
            .then((producto) => {
                res.render('home', {
                    titulo: 'HOME',
                    css: 'estiloHome.css',
                    producto: producto
                });
            })
    },
    carrito: (req, res) => {
        let productosCarrito = req.session.carrito;

        res.render('carritoCompras', {
            titulo: 'Carrito',
            css: 'estiloCompras.css',
            carrito: productosCarrito
        });
    },

    agregarproducto: (req, res) => {
        let productoAlCarrito= {
            id: req.params.id,
            nombre: req.body.nombre,
            precio: req.body.precio
        }

        let productosEnCarrito = req.session.carrito;

        if (productosEnCarrito != null && productosEnCarrito != undefined) {
            req.session.carrito =  [...productosEnCarrito, productoAlCarrito];
        } else {
            req.session.carrito = [];
            req.session.carrito.push(productoAlCarrito)
        }

        res.redirect("/carrito");
    }

}

module.exports = mainController;