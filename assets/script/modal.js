let blur = document.querySelector("#blur")
let container = document.querySelector(".wrapper")
let popup = document.querySelector(".popup")

function active() {
    container.classList.toggle('blur')
    popup.style.opacity = '1'
}
function hide() {
    container.classList.toggle('blur')
    popup.style.opacity = '0'
}