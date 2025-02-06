let text='Hello There...! I am a React Developer';

let divWrapper=document.getElementById('wrapper');

let index=0;
writeText=()=>{
divWrapper.innerText=text.slice(0,index);
index++;
if(index>text.length){
    index=0;
}

}

setInterval(writeText,100);

