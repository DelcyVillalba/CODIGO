let boton = document.getElementById("modo");
let isBackgroundgrey = false;

boton.addEventListener("click", function () {
    if (isBackgroundgrey) {
        document.body.style.backgroundColor = "";
        isBackgroundgrey = false;
    } else {
        document.body.style.backgroundColor = "darkslategray";
        isBackgroundgrey = true;
    }
});

const button = document.querySelector("#menu-hamburguesa")

button.addEventListener("click", function(){
    document.body.classList.toggle("mobile-menu-active");
})

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
