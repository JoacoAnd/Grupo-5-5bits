let usuarioController = {
    login: (req, res) => {
        res.render('login', {
            titulo: 'Login',
            css: 'estiloLogin.css'
        });
    },
    register: (req, res) => {
        res.render('register', {
            titulo: 'Registro',
            css: 'estiloRegistro.css'
        });
    }
}

module.exports = usuarioController;