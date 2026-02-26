const buttons = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".box");
const searchbox = document.querySelector("#search");

//button clicks
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveBtn(e);
    const btnFilter = e.target.dataset.filter;

    boxes.forEach((box) => {
      if (btnFilter == "all") {
        box.style.display = "block";
      } else {
        const boxFilter = box.dataset.item;
        if (boxFilter == btnFilter) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      }
    });
  });
});

//active
function setActiveBtn(e) {
  buttons.forEach((button) => {
    button.classList.remove("btn-clicked");
  });
  e.target.classList.add("btn-clicked");
}

//search products
searchbox.addEventListener("keyup", (e) => {
  let searchText = e.target.value.toLowerCase().trim();

  boxes.forEach((box) => {
    const dataBox = box.dataset.item;
    if (dataBox.includes(searchText)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });

  buttons.forEach((button) => {
    button.classList.remove("btn-clicked");
  });

  buttons[0].classList.add("btn-clicked");
});
