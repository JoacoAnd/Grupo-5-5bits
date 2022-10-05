window.addEventListener('load', ()=>{

    const activePage = window.location.href;
    const navLinks = document.querySelectorAll("ul#barraNavUl li a");
    navLinks.forEach((link) =>{
        if (link.href == activePage) {
            link.classList.add('active');
        }
    });


    /* Mostrar menu */
    const buttonMenu = document.querySelector(".burger-menu");
    const menu = document.querySelector("ul#barraNavUl");

    buttonMenu.addEventListener("click", (e)=>{
        e.preventDefault();
        menu.classList.toggle("mostrarmenu");
    });

    window.addEventListener("resize", ()=>{
        if (window.innerWidth > 360 && menu.classList.contains("mostrarmenu")) {
            menu.classList.remove("mostrarmenu");
        }
    })
})