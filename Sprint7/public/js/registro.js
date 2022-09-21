window.addEventListener('load', function () {

    let formularioRegistro = document.querySelector(".form_registro");
    let enviar = document.querySelector(".enviar");
    let userName = document.querySelector('#nombre');
    let errorNombre = document.querySelector(".errorNombre");

    let userApellido = document.querySelector('#apellido');
    let errorApellido = document.querySelector(".errorApellido");


    let userEmail = document.querySelector("#email").value;
    let errorEmail = document.querySelector(".errorEmail");

    let userPassword = document.querySelector("#clave");
    let errorPassword = document.querySelector(".errorPassword");
    let userReClave = document.querySelector("#re-clave");


    let userAvatar = document.querySelector('#userprofilephotos');
    let errorAvatar = document.querySelector(".errorAvatar");

    //formularioRegistro.addEventListener('submit', function (e) {
    enviar.addEventListener('click', function (e) {
        e.preventDefault();
        let errores = {};

        // ○ NOMBRE Y APELLIDO ■ Obligatorio. ■ Deberá tener al menos 2 caracteres.
        if (userName.value.length <= 2) {
            errores.nombre='NOMBRE - Este campo es obligatorio, debes ingresar al menos 3 carácteres.';
            console.log("error nombre")
        };
        if (userApellido.value.length <= 2) {
            errores.apellido='APELLIDO - Este campo es obligatorio, debes ingresar al menos 3 carácteres.';
            console.log("error apellido")

        };
        // ○ EMAIL ■ Obligatorio. ■ Debe ser valido
        if (!userEmail.includes("@")) {
            errores.email='EMAIL - Este campo debe contener un email valido.';
            console.log("error email")
        };
        // ○ CONTRASEÑA ■ Obligatorio. ■ Deberá tener al menos 8 caracteres.
        if (userPassword !== userReClave) {
            errores.password='CONTRASEÑAS - La contraseña no coincide.';
            console.log("error contraseña no coincide")

        }else if(userPassword == "" || userReClave == ""){
            errores.password='CONTRASEÑAS - Debe ingresar una contraseña';
            console.log("error contraseña vacia")


        }
        // ○ IMAGEN  ■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
        let imagenValidacion = userAvatar.files[0]

        if (imagenValidacion && imagenValidacion.type != 'image/jpeg' && imagenValidacion.type != 'image/png' 
        && imagenValidacion.type != 'image/jpg'){
            errores.imagen = 'IMAGEN - El formato de archivo no es valido'
            console.log("error imagen")

        }
        
        //Mostrar errores
        if (Object.keys(errores).length >= 1) {
            errorNombre.innerText =  (errores.nombre) ? errores.nombre : '';
            errorApellido.innerText =  (errores.apellido) ? errores.apellido : '';
            errorEmail.innerText = (errores.email) ? errores.email : '';
            errorPassword.innerText = (errores.password) ? errores.Password : '';
            errorAvatar.innerText = (errores.imagen) ? errores.imagen : '';
        } else {
            formCreate.submit();
        }
        });


});
