let popUp = document.createElement("div");
popUp.id = "popup";

document.body.appendChild(popUp);

let fruit = document.querySelectorAll(".img");

fruit.forEach((fru) => {
  fru.addEventListener("click", () => {
    popUp.classList.add("active");
    let showImg = document.createElement("img");
    showImg.src = fru.src;
    showImg.id = "img";

    while (popUp.firstChild) {
      popUp.removeChild(popUp.firstChild);
    }

    popUp.append(showImg);
  });
});

popUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});
