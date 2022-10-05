window.addEventListener('load', ()=>{

    const activePage = window.location.href;
    const navLinks = document.querySelectorAll("ul#barraNavUl li a");
    navLinks.forEach((link) =>{
        if (link.href == activePage) {
            console.log("si");
            link.classList.add('active');
        }
    });
})