const hour=document.querySelector(".hrs");
const minute=document.querySelector(".min");
const second=document.querySelector(".sec");

function clock(){
    const time=new Date();
    const sec=time.getSeconds()/60;
    const min=time.getMinutes()/60;
    const hrs=time.getHours()/12;
    hour.style.setProperty('--rotation',hrs*360);
    minute.style.setProperty('--rotation',min*360);
  second.style.setProperty('--rotation',sec*360);
}
clock();
setInterval(clock,1000)