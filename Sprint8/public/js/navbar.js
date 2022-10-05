window.addEventListener('load', ()=>{

    const activePage = window.location.href;
    const navLinks = document.querySelectorAll("ul#barraNavUl li a");
    navLinks.forEach((link) =>{
        if (link.href == activePage) {
            link.classList.add('active');
        }
    });

})