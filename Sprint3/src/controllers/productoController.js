let productoController = {
    
    detalleProducto: (req, res) => {
        res.render('detalleProducto', {
            titulo: 'Detalle del Producto',
            css: 'estiloDetalleProducto.css'
        });
    }
}

module.exports = productoController;