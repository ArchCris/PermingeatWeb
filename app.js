/*EFECTO MOVIMIENTO MENU*/ 
const menu = document.getElementById("menu")
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        menu.style.height="5vh"
    } else {
        menu.style.height="10vh"
    }
})

