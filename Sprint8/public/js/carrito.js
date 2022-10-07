window.onload = function (){
let nombre = document.getElementClassName('nombre');
let precio = document.getElementClassName('precio');
let cantidad =  document.getElementClassName('cantidad').value;
let montoTotal = document.getElementClassName('montoTotal');
let incrementa = document.getElementsByClassName('suma');
let decrementa = document.getElementsByClassName('resta');

function sumar() {
    if (cantidad) {
        cantidad++;
    } else {
        cantidad = 1;
    }
    cantidad.innerHTML = cantidad;
}
function restar() {
    if (cantidad) {
        cantidad++;
    } else {
        cantidad = 1;
    }
    cantidad.innerHTML = cantidad;
}

incrementar.click(function() {
     sumar()
});

decrementa.click(function() {

     restar()
});





}