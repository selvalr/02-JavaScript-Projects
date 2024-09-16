let newQuoteBtn = document.querySelector(".container .new-quote-btn");
let tweetBtn = document.querySelector(".container .tweet-btn");
let quote = document.querySelector(".container .quote p");
let author = document.querySelector(".container .quote h6");

newQuoteBtn.addEventListener("click", () => {
  const idget = Math.floor(Math.random() * 30);
  console.log(idget);

  const url = "https://dummyjson.com/quotes/" + idget;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.quote;
      author.innerHTML = "-- " + data.author;
    });
});

tweetBtn.addEventListener("click", () => {
  let tweeturl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    quote.innerText + " " + author.innerText
  )}`;
  window.open(tweeturl, "_blank");
});

newQuoteBtn.click();
