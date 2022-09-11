window.onload = function () {
    let formulario = document.querySelector('.form_login');
    let email = document.querySelector('#usuarioLogin');
    let clave = document.querySelector('#contraseniaLogin');

    formulario.addEventListener('submit', function (event) {

        if (email.value.length == 0) {
            email.classList.add('st_error');
            email.placeholder ="Ingrese Email";
            event.preventDefault();
        }

        if (clave.value.length == 0) {
            clave.classList.add('st_error');
            clave.placeholder ="Ingrese Contraseña";
            event.preventDefault();
        }

    })


}