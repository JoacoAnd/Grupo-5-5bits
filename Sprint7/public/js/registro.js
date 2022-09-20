window.addEventListener('load', function() {
    
    let formularioRegistro = document.querySelector(".form_registro");
    let userName = document.querySelector('#nombre');    
    let errorNombre = document.querySelector(".errorNombre");

    let userEmail = document.querySelector("#email");
    let errorEmail = document.querySelector(".errorEmail");

    let userPassword = document.querySelector("#clave");
    let errorPassword = document.querySelector(".errorPassword");
    let userReClave = document.querySelector("#re-clave");
    

    let userAvatar = document.querySelector('#userprofilephotos');
    let errorAvatar  = document.querySelector(".errorAvatar");
    formularioRegistro.addEventListener('submit', function(e) {
        let errores = [];
        if(userName.value.length <= 2){
            errores.push('Este campo es obligatorio, debes ingresar al menos 3 carácteres');
            console.log('Este campo es obligatorio, debes ingresar al menos 3 carácteres');
        } ;
        if(userApellido.value.length <= 2){
            errores.push('Este campo es obligatorio, debes ingresar al menos 3 carácteres');
            console.log('Este campo es obligatorio, debes ingresar al menos 3 carácteres');
        } ;

        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector(".errores ul");
            for(let i=0;i< errores.length;i++ ){
            ulErrores.innerHTML += '<li>'+ errores[i] +'</li>'
            } ;          
        } else {
            formularioRegistro.submit();
        }
    });

});