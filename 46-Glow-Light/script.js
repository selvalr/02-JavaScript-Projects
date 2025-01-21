const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(50,50,10,0, Math.PI*2);
ctx.fill();
const particles = [];
const mouse = {
  x:undefined,
  y:undefined
}
let num = 0;
class Circle{
  constructor(){
    this.x = mouse.x;
    this.y = mouse.y;
    this.uX = Math.random()*4-2;
    this.uY = Math.random()*4-2;
    this.radius = Math.random()*7+2;
    this.color = "hsl("+num+",100%,50%)";
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
  }
  update(){
    this.x+=this.uX;
    this.y+=this.uY;
    if(this.radius>0.2){
      this.radius-=0.1;
    }
  }
}
cvs.addEventListener('mousemove', function(evt){
  mouse.x = evt.x;
  mouse.y = evt.y;
  for(let i=0;i<2;i++){
    particles.push(new Circle());
  }
});
function loop(){
   ctx.fillStyle = "rgb(0,0,0,0.1)";
  ctx.fillRect(0,0,cvs.width,cvs.height);
  for(let i=0;i<particles.length;i++){
    particles[i].draw();
    particles[i].update();
    for(let j=0;j<particles.length;j++){
      const dx = particles[i].x-particles[j].x;
      const dy = particles[i].y-particles[j].y;
      const distance = Math.sqrt(dx*dx+dy*dy);
      if(distance<=50){
      ctx.strokeStyle = particles[i].color;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(particles[i].x,particles[i].y);
      ctx.lineTo(particles[j].x,particles[j].y);
      ctx.stroke();
      ctx.closePath();
        }
    }
    if(particles[i].radius<=0.4){
      particles.splice(i,1);
      
    }
  }
  num+=5;
 
  requestAnimationFrame(loop);
}
loop();