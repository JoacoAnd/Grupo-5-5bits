const categorias = ['Mujeres','Hombres','Niños','Noche','Casual'];
const talles = ['S', 'M', 'L', 'XL', 'XXL'];

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
            css: 'estiloProducto.css',
            categorias: categorias,
            talles: talles
        });
    },

}

module.exports = productoController;