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
   
}

module.exports = mainController;