window.addEventListener('load', function() {
    
    let buttonCreate = document.querySelector('.guardar');
    let inputNombre = document.querySelector('#nombre');
    let inputDescripcion = document.querySelector('#descripcion');
    let errNombre = document.querySelector(".errNombre");
    let formCreate = document.querySelector(".formcrearproducto");
    let errDescripcion = document.querySelector(".errDescripcion");
    let inputPrecio = document.querySelector("#precio");
    let errPrecio = document.querySelector(".errPrecio");
    let inputImagen = document.querySelector('#imagen');
    let errImagen = document.querySelector(".errImagen");

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

        } else if (inputDescripcion.value.length < 20){
            errores.descripcion = 'El campo tiene que tener mas de 20 caracteres';
        } 

        if(!inputPrecio.value){
            errores.precio = 'Este campo es obligatorio';
        }

        let imagenValidacion = inputImagen.files[0]

        if(!imagenValidacion){
            errores.imagen = 'Debe subir una imagen'
        } else if (imagenValidacion.type != 'image/jpeg' && imagenValidacion.type != 'image/png' 
        && imagenValidacion.type != 'image/jpg'){
            errores.imagen = 'El formato de archivo no es valido'
        }
        
        if (Object.keys(errores).length >= 1) {
            errNombre.innerText =  (errores.nombre) ? errores.nombre : '';
            errDescripcion.innerText =  (errores.descripcion) ? errores.descripcion : '';
            errPrecio.innerText = (errores.precio) ? errores.precio : '';
            errImagen.innerText = (errores.imagen) ? errores.imagen : '';
        } else {
            formCreate.submit();
        }
    });
});