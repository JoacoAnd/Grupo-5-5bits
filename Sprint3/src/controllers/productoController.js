let productoController = {
    
    detalleProducto: (req, res) => {
        res.render('./producto/detalleProducto', {
            titulo: 'Detalle del Producto',
            css: 'estiloDetalleProducto.css'
        });
    },

    producto: (req, res) => {
        res.render('./producto/producto', {
            titulo: 'Producto',
            css: 'estiloProducto.css'
        });
    }
}

module.exports = productoController;