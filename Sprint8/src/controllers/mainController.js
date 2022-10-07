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
        res.render('carritoCompras', {
            titulo: 'Carrito',
            css: 'estiloCompras.css'
        });
    },


}




module.exports = mainController;