const copyText=document.querySelector("textarea[name=copyText]");
const moveText=document.querySelector("textarea[name=finalTxt]")
const copyBtn=document.querySelector(".copyBtn");
const moveBtn=document.querySelector(".moverBtn");
const output=document.querySelector(".output");

copyBtn.addEventListener('click',()=>{
let tempStore=copyText.value;

copyToClipBoard(tempStore);
moveText.value="";
})

moveBtn.addEventListener('click',()=>{
    let tempStore=copyText.value;
    
   moveText.value=tempStore;
    })

    copyText.addEventListener("click", () => this.select());
moveText.addEventListener("click", () => this.select());


function copyToClipBoard(str) {

    let out_put=document.querySelector(".outout-container");
    const textarea = document.createElement("textarea");
  textarea.value = str;
  out_put.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  out_put.removeChild(textarea);
  output.innerHTML = `<h3>Content Copied </h3>`;
  output.classList.add("added");

  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000);

}
