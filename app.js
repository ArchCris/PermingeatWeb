/*EFECTO MOVIMIENTO MENU*/
let positionA = window.scrollY
const menu = document.getElementById("menu")
window.addEventListener("scroll", () => {
    positionB = window.scrollY
    if (positionA > positionB) {
        menu.style.height="10vh"
    } else {
        menu.style.height="5vh"
    }
    positionA = positionB
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
var mymap = L.map('mapid').setView([-34.57810926536335, -58.44511256218203], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2lyY3Jpc3MiLCJhIjoiY2tteXp1Z3ZxMDU1YzJvbDJndjJxMjR2aCJ9.LXdD0PNDsGWo2iwHuZnMAA'
}).addTo(mymap);

var marker = L.marker([-34.57810926536335, -58.44511256218203]).addTo(mymap);

marker.addEventListener("click", redirection)

function redirection() {
    console.log("fd")
    window.location.replace("https://www.google.com/maps/place/Tte.+Benjam%C3%ADn+Matienzo+3055,+C1426+DBE,+Buenos+Aires/@-34.578064,-58.4457308,19z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5ea2dff961f:0x4a5a543d46b364b0!8m2!3d-34.5780651!4d-58.4451823");
}

