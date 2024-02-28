const output = document.querySelector("#output");
const length = document.querySelector("#length");
const number = document.querySelector("#number");
const capital = document.querySelector("#capital");
const small = document.querySelector("#small");
const symbol = document.querySelector("#symbol");
const btnCopy = document.querySelector("#copy");
const formAction = document.querySelector("#frm");

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
});

function generateFun(min, max) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

function capitalLetter() {
  return generateFun(65, 90);
}

function smallLetter() {
  return generateFun(97, 122);
}

function symbols() {
  let symbols = '!@#$%^&*()_+~?><"|:}{';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function numbers() {
  return generateFun(48, 57);
}

let getAllFunctions = [
  {
    element: number,
    fun: numbers,
  },
  {
    element: capital,
    fun: capitalLetter,
  },
  {
    element: small,
    fun: smallLetter,
  },
  {
    element: symbol,
    fun: symbols,
  },
];

formAction.addEventListener("submit", (e) => {
  e.preventDefault();

  const limit = length.value;

  let generatedPassword = "";

  const funArray = getAllFunctions.filter(({ element }) => element.checked);
  //console.log(funArray);

  for (i = 0; i < limit; i++) {
    const index = Math.floor(Math.random() * funArray.length);
    const letter = funArray[index].fun();
    generatedPassword += letter; //5$
  }

  output.value = generatedPassword;
});
