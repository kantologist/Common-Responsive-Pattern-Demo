var menu = document.getElementById("menu");
var hamburgers = document.getElementsByClassName("hamburger");
var close  = document.getElementsByClassName("close");
menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    if(close[0].style.diplay == "none"){
        for(var hamburger of hamburgers){
            hamburger.classList.toggle("hide");
        }
        close[0].classList.toggle("show");
    } else {
        for(var hamburger of hamburgers){
            hamburger.classList.toggle("hide");
        }
        close[0].classList.toggle("show");
    }
    e.stopPropagation();
})