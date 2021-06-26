/*EFECTO MOVIMIENTO MENU*/ 
const menu = document.getElementById("menu")
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        menu.style.height="5vh"
    } else {
        menu.style.height="10vh"
    }
})


/*EFECTO MENU MOBILE*/
const splashMenu = document.querySelector(`.splashMenu`)
const burger = document.querySelector(`#burger`)
burger.addEventListener("click",openMenu)

function openMenu() {
    splashMenu.classList.toggle("active")
    console.log("probando")
}

