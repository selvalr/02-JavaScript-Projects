let btn=document.getElementById("btn");
let hex=document.getElementById("hxncode");

function color(){
    let colors="0123456789ABCDEF";
let color='#';
    for(i=0;i<6;i++){
        color += colors[Math.floor(Math.random() * 16)];
    }
    return color;
}




btn.addEventListener('click',()=>{
document.body.style.background=color();
hex.innerHTML=color();
})