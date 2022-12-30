// function toggle(){
//     var blur = document.getElementById('blur')
//     blur.classList.toggle('active')
//     var popup = document.querySelector('.popup')
//     popup.classList.toggle('active')
// }
function toggle2(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popup = document.querySelector('.popup2')
    popup.classList.toggle('active')
}
function toggle3(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popup = document.querySelector('.popup3')
    popup.classList.toggle('active')
}
function toggle4(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popup = document.querySelector('.popup4')
    popup.classList.toggle('active')
}
function toggle5(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popup = document.querySelector('.popup5')
    popup.classList.toggle('active')
}
// criar function universal para poder fechar qualquer popup

const id1 = new toggle(class) // id em string

function toggle(class){
 var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popup = document.getElementByClass(class) // ex. id: "popup1"
    popup.classList.toggle('active')
}

const botao1 = document.getElementById("botao1")
botao1.addEventListener("click", id1(class))
