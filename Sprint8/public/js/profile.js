window.addEventListener('load', ()=>{

    const buttonLogout = document.querySelector(".buttonlogout");
    console.log(window.location);
    buttonLogout.addEventListener("click", (e)=> {
        e.preventDefault();
        window.location.href = window.location.origin + "/logout";
    })
})