window.addEventListener("load", () => {
    const articleCarrito = document.querySelectorAll("article.productoCarrito");
    const total = document.querySelector("span.montoTotal");
    const precios = [];

    articleCarrito.forEach(article => {

        const precio = Number(article.children[1].innerHTML);
        const contadorCarrito = article.children[2];
        const resta = contadorCarrito.children[0];
        const cantidad = contadorCarrito.children[1];
        const suma = contadorCarrito.children[2];
        const remover = contadorCarrito.children[3];
        precios.push(precio);

        suma.addEventListener("click", () => {
            let numero = Number(cantidad.innerText);
            cantidad.innerText = numero + 1;
        });

        resta.addEventListener("click", () => {
            let numero = Number(cantidad.innerText);

            if (numero > 1) {
                cantidad.innerText = numero - 1;
            }
        })
        
    });

    let totalPrecio = 0;
    precios.forEach(cadaPrecio => {
        totalPrecio += cadaPrecio;
        total.innerHTML = totalPrecio
    })

});