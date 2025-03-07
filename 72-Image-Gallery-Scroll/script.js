let scrollContainer = document.querySelector(".gallery");
let forwardBTN = document.querySelector("#forward");
let backwardBTN = document.querySelector("#backward");

let page = 0;

async function indinityImages() {
	let url = `https://api.unsplash.com/photos?page=${page}&per_page=3&client_id=aUyatGjm53i7sveKX2KSdZDBTggjvENE-FvZoZX1pf0`;

	let response = await fetch(url);
	let data = await response.json();
	console.log(data);

	data.forEach((item) => {
		let img = document.createElement("img");
		img.src = item.urls.small;

		scrollContainer.appendChild(img);
	});
}

scrollContainer.addEventListener("wheel", (e) => {
	e.preventDefault();
	scrollContainer.scrollLeft += e.deltaY;
});

forwardBTN.addEventListener("click", (e) => {
	scrollContainer.scrollLeft += 1000;
	page++;
	indinityImages();
});

backwardBTN.addEventListener("click", (e) => {
	scrollContainer.scrollLeft -= 1000;
});
