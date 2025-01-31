let indicater=document.querySelector(".scroll-indicator .progress");
let scroHeight=document.documentElement.scrollHeight- document.documentElement.clientHeight;


window.addEventListener("scroll",scroll);

function scroll(){
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scroHeight) * 100;
    indicater.style.width=`${scrolled}%`
}