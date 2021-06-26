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
const line1 = document.querySelector(`.line1`)
const line2 = document.querySelector(`.line2`)
const line3 = document.querySelector(`.line3`)
const splashMenu = document.querySelector(`.splashMenu`)
const burger = document.querySelector(`#burger`)
burger.addEventListener("click",openMenu)

function openMenu() {
    splashMenu.classList.toggle("active")
    line1.classList.toggle("act1")
    line2.classList.toggle("act2")
    line3.classList.toggle("act3")
    console.log("probando")
}

