var confirmação = false
var ul_menu = document.getElementById('ul-menu-celular')
var div_menu = document.getElementById('menu-para-celular')
var janelaLargura = window.innerWidth
var telaLargura = screen.width


function menu() {
    if (confirmação === true) {
        ul_menu.setAttribute('hidden', 'null')
        confirmação = false
    } else {
        if (janelaLargura <= 600 || telaLargura <= 600) {

            ul_menu.removeAttribute('hidden')
            confirmação = true
        }
    }
}
