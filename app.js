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

/*PLANO CONTACTO*/

var mymap = L.map('mapid').setView([-34.57592843737485, -58.43615979603104], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2lyY3Jpc3MiLCJhIjoiY2tteXp1Z3ZxMDU1YzJvbDJndjJxMjR2aCJ9.LXdD0PNDsGWo2iwHuZnMAA'
}).addTo(mymap);

var marker = L.marker([-34.57592843737485, -58.43615979603104]).addTo(mymap);

marker.addEventListener("click", redirection)

function redirection() {
    console.log("fd")
    window.location.replace("https://www.google.com.ar/maps/place/Melisa+Permingeat/@-34.5760173,-58.4373328,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5942fde75e5:0xb05fd9ad9548e750!8m2!3d-34.5760242!4d-58.435147");
}

