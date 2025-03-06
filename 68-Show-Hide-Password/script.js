const inputs=document.querySelector('input');
const eye=document.querySelector('#eye-icon');

eye.addEventListener('click',()=>{
    inputs.type === "password" ? (inputs.type = "text") : (inputs.type = "password");
})