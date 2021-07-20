//находим кнопку по которой будет нажатие
const buttonCreateInput = document.getElementById("hamburger-button")

const menu = document.getElementById("menu")



buttonCreateInput.addEventListener("click", showHiddenMenu)

function showHiddenMenu() {
    menu.toggleAttribute("hidden")
    /*menu.setAttribute("hidden", "true")*/
}



//заменитель hover
const allTabs = [...document.querySelectorAll(".main-menu-item")]

const hover=document.getElementById("test")

hover.addEventListener("mouseover", function( event ) {
    // highlight the mouseenter target
    event.target.style.color = "#8D81AC";


}, false);


