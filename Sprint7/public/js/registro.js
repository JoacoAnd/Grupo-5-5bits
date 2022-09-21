window.addEventListener('load', function () {

    let formularioRegistro = document.querySelector(".form_registro");
    let enviar = document.querySelector(".enviar");

    let userName = document.querySelector('#nombre');
    let errorNombre = document.querySelector(".errorNombre");

    let userApellido = document.querySelector('#apellido');
    let errorApellido = document.querySelector(".errorApellido");


    let userEmail = document.querySelector("#email");
    let errorEmail = document.querySelector(".errorEmail");

    let userPassword = document.querySelector("#clave");
    let errorPassword = document.querySelector(".errorPassword");
    let userReClave = document.querySelector("#re-clave");


    let userAvatar = document.querySelector('#userprofilephotos');
    let errorAvatar = document.querySelector(".errorAvatar");


    enviar.addEventListener('click', function (e) {
        e.preventDefault();
        let errores = {};

        // ○ NOMBRE Y APELLIDO ■ Obligatorio. ■ Deberá tener al menos 2 caracteres.
        if (userName.value.length <= 2) {
            errores.nombre = 'Este campo es obligatorio y debe ingresar al menos 3 carácteres.';
            
        };
        if (userApellido.value.length <= 2) {
            errores.apellido = 'Este campo es obligatorio y debe ingresar al menos 3 carácteres.';
           

        };
        // ○ EMAIL ■ Obligatorio. ■ Debe ser valido
        if (!userEmail.value.includes("@")) {
            errores.email = 'Este campo debe contener un email valido.';
         
        };
        // ○ CONTRASEÑA ■ Obligatorio. ■ Deberá tener al menos 8 caracteres.
        if (!userPassword.value || !userReClave.value) {
            errores.password = 'Debe ingresar una contraseña de almenos 8 caracteres';
            

        } else if (userPassword.value !== userReClave.value) {
            errores.password = 'La contraseña no coincide.';
            console.log("error contraseña no coincide");
        }
        // ○ IMAGEN  ■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
        let imagenValidacion = userAvatar.files[0]
        
        if (imagenValidacion) {
            if (imagenValidacion.type != 'image/jpeg' && imagenValidacion.type != 'image/png' && imagenValidacion.type != 'image/jpg') {
                errores.imagen = 'El formato de archivo no es valido.'
            }

        }



        //Mostrar errores
        if (Object.keys(errores).length >= 1) {
            errorNombre.innerText = (errores.nombre) ? errores.nombre : '';
            errorApellido.innerText = (errores.apellido) ? errores.apellido : '';
            errorEmail.innerText = (errores.email) ? errores.email : '';
            errorPassword.innerText = (errores.password) ? errores.password : '';
            errorAvatar.innerText = (errores.imagen) ? errores.imagen : '';
        } else {
            formularioRegistro.submit();
        }
    });
});
