const canvas=document.getElementById('canvas');
const increaseBtnEl=document.getElementById('increase');
const decreaseBtnEl=document.getElementById('decrease');
const sizeEl=document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl=document.getElementById('clear');


const ctx = canvas.getContext('2d');

let size=10;
let isPressed=false;
colorEl.value='black';
let color = colorEl.value
let x
let y

canvas.addEventListener('mousedown',(e)=>{
    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;   
})


document.addEventListener('mouseup',(e)=>{
    isPressed=false;
    x=undefined;
    y=undefined;
     
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x1=e.offsetX;
        const y1=e.offsetY;
        drawCircle(x1, y1);
        drawLine(x, y, x1, y1)
        x=x1;
        y=y1;
    }
})

//circle plain
function drawCircle(x1, y1) {
      ctx.beginPath();
       ctx.arc(x1, y1, size, 0, Math.PI * 2);
       ctx.fillStyle = color;       
       ctx.fill();    

}


//plain draw
function drawLine(x,y,x1,y1){
    ctx.beginPath();
    
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = size * 2;
    ctx.strokeStyle = color;
    ctx.stroke();
}


//showed Size Text
function updateSizeOnScreen() {
sizeEl.innerText=size;
}

//increase Size
increaseBtnEl.addEventListener('click',()=>
    {
    size+=5;
    if(size > 50) 
    {
        size = 50;
    }
   updateSizeOnScreen();
})


//Decrease Size
 decreaseBtnEl.addEventListener('click',()=>
    {
    size-=5;
    if(size < 5) 
    {
        size = 5;
    }
   updateSizeOnScreen();
})

//change color Pen
colorEl.addEventListener('change',(e)=>color=e.target.value);

//clear the board
clearEl.addEventListener('click',()=>ctx.clearRect(0,0, canvas.width, canvas.height))