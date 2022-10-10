window.addEventListener('load', function() {

    let buttonCreate = document.querySelector('.guardar');
    let inputNombre = document.querySelector('#nombre');
    let inputDescripcion = document.querySelector('#descripcion');
    let errorNombre = document.querySelector(".errorNombre");
    let formCreate = document.querySelector("#producto");
    let errorDescripcion = document.querySelector(".errorDescripcion");
    let inputPrecio = document.querySelector("#precio");
    let errorPrecio = document.querySelector(".errorPrecio");
    let inputImagen = document.querySelector('#imagen');
    let errorImagen = document.querySelector(".errorImagen");
    
    buttonCreate.addEventListener('click', function(e) {
        e.preventDefault();

        let errores = {};
        
        if(inputNombre.value.length < 1){
            errores.nombre = 'Este campo es obligatorio';

        } else if (inputNombre.value.length < 5){
            errores.nombre = 'El campo tiene que tener mas de 5 caracteres';
        } 
        
        if(inputDescripcion.value.length < 1){
            errores.descripcion = 'Este campo es obligatorio';

        } else if (inputDescripcion.value.length < 15){
            errores.descripcion = 'El campo tiene que tener mas de 20 caracteres';
        } 

        if(!inputPrecio.value){
            errores.precio = 'Este campo es obligatorio';
        }

        let imagenValidacion = inputImagen.files[0]

        if (imagenValidacion && imagenValidacion.type != 'image/jpeg' && imagenValidacion.type != 'image/png' 
        && imagenValidacion.type != 'image/jpg'){
            errores.imagen = 'El formato de archivo no es valido'
        }
        
        if (Object.keys(errores).length >= 1) {
            errorNombre.innerText =  (errores.nombre) ? errores.nombre : '';
            errorDescripcion.innerText =  (errores.descripcion) ? errores.descripcion : '';
            errorPrecio.innerText = (errores.precio) ? errores.precio : '';
            errorImagen.innerText = (errores.imagen) ? errores.imagen : '';
        } else {
            formCreate.submit();
        }
    });
});