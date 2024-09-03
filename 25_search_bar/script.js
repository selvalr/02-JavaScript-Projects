let searchBar = document.getElementById("search-bar");
let searchBtn = document.getElementById("search-icon");
let searchBox = document.getElementsByTagName("input")[0];

searchBox.addEventListener("focus", () => {
  searchBar.style.width = "100%";
});

searchBox.addEventListener("keydown", () => {
  searchIcon.style.display = "none";
});

searchBox.addEventListener("blur", () => {
  searchBar.style.width = "150px";
  searchIcon.style.display = "inline-block";
});
