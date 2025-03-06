const loaderText=document.querySelector('.loading-text');
const back=document.querySelector('.background');

let load=0;
let imt=setInterval(bluring,30)


function bluring(){
    load++;
    console.log(load)
    if(load>99){
        clearInterval(imt)
    }
    loaderText.innerText=`${load}%`;
    loaderText.style.opacity= scale(load, 0, 100, 1, 0);
    back.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };