


//находим кнопку по которой будет нажатие
const buttonCreateInput = document.getElementById("hamburger-button")

const menu = document.getElementById("menu")



buttonCreateInput.addEventListener("click", showHiddenMenu)
//1 сдвижения

/*function showHiddenMenu() {
  
    if (menu.style.transform === ""|| menu.style.transform === "translateX(110%)"){

        menu.style.transform = "translateX(0%)"

        buttonCreateInput.lastElementChild.style.transform="rotate(45deg)"

        /!* buttonCreateInput.lastElementChild.style.top=0
       buttonCreateInput.lastElementChild.style.transform="rotate(87deg)"*!/


    }else{
        menu.style.transform = "translateX(110%)"
        buttonCreateInput.lastElementChild.style.transform="rotate(0deg)"
    }
}*/
function showHiddenMenu() {
    menu.toggleAttribute("hidden")
    /*menu.setAttribute("hidden", "true")*/
}



/*
    #hamburger span{
                     transform: rotate(45deg);
                 }

        #hamburger span::before{
            top: 0;
            transform: rotate(0);
            display: none;
        }
        #hamburger span::after{
            top: 0;
            transform: rotate(90deg)
        }


function showHiddenMenu() {
    if (menu.style.display === ""){
        menu.style.display ="none"
    }else{
        menu.style.display = ""
        menu.style.transform = "translateX(0%)"
    }
}*/
//заменитель hover
const allTabs = [...document.querySelectorAll(".main-menu-item")]

const hover=document.getElementById("test")

hover.addEventListener("mouseover", function( event ) {
    // highlight the mouseenter target
    event.target.style.color = "#8D81AC";

    // reset the color after a short delay
  /*  setTimeout(function() {
        event.target.style.color = "";
    }, 500);*/
}, false);


/*
allTabs.forEach(element => {
        element.addEventListener("click", toggle)
    }
)

        function toggle(event) {
            event.target.style.backgroundColor="red"

}*/
