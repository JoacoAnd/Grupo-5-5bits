let mainController = {
    main: (req, res) => {
        res.render('home', {
            titulo: 'HOME',
            css: 'estiloHome.css'
        });
    },
    carrito: (req, res) => {
        res.render('carritoCompras', {
            titulo: 'Carrito',
            css: 'estiloCompras.css'
        });
    },
    productos: (req, res) => {
        res.render('detalleProducto', {
            titulo: 'Detalle del Producto',
            css: 'estiloDetalleProducto.css'
        });
    }
}

module.exports = mainController;