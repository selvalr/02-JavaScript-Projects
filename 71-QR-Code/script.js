function qrGenerate() {
	let inputBox = document.querySelector(".inputBox");
	let qrImg = document.querySelector(".qr");
	let download = document.querySelector("#download-qr");

	qrImg.style.display = "block";

    let encodedInput = encodeURIComponent(inputBox.value);

	let randomQuote = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedInput}`;

	if (inputBox.value.length == 0) {
		alert("Enter text or URL ");
	} else {
		qrImg.src = randomQuote;
		qrImg.setAttribute("title", inputBox.value);
	}
}
