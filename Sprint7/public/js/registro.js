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
        let errores = [];
        // ○ NOMBRE Y APELLIDO ■ Obligatorio. ■ Deberá tener al menos 2 caracteres.
        if (userName.value.length <= 2) {
            errores.push('NOMBRE - Este campo es obligatorio, debes ingresar al menos 3 carácteres');
          console.log("error nombre")
        };
        if (userApellido.value.length <= 2) {
            errores.push('APELLIDO - Este campo es obligatorio, debes ingresar al menos 3 carácteres');
          console.log("error apellido")
            
        };
        // ○ EMAIL ■ Obligatorio. ■ Debe ser valido
        if (!userEmail.includes("@")) {
            errores.push('EMAIL - Este campo debe contener un email valido');
            console.log("error email")
        };
        // ○ CONTRASEÑA ■ Obligatorio. ■ Deberá tener al menos 8 caracteres.

        // ○ IMAGEN  ■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
        let imagenValidacion = inputImagen.files[0]

        if(!imagenValidacion){
            errores.imagen = 'Debe subir una imagen'
        } else if (imagenValidacion.type != 'image/jpeg' && imagenValidacion.type != 'image/png' 
        && imagenValidacion.type != 'image/jpg'){
            errores.imagen = 'El formato de archivo no es valido'
        }

        //Mostrar errores
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector(".errores ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>' + '<br>'
            };
        } else {
            formularioRegistro.submit();
        }
    });

});