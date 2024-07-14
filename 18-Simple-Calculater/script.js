function add() {
  let value1 = document.getElementById("val1").value;
  let value2 = document.getElementById("val2").value;

  let output = parseInt(value1) + parseInt(value2);

  document.getElementById("output").innerHTML = output;
}

function sub() {
  let value1 = document.getElementById("val1").value;
  let value2 = document.getElementById("val2").value;

  let output = parseInt(value1) - parseInt(value2);

  document.getElementById("output").innerHTML = output;
}

function mul() {
  let value1 = document.getElementById("val1").value;
  let value2 = document.getElementById("val2").value;

  let output = parseInt(value1) * parseInt(value2);

  document.getElementById("output").innerHTML = output;
}

function div() {
  let value1 = document.getElementById("val1").value;
  let value2 = document.getElementById("val2").value;

  let output = parseInt(value1) / parseInt(value2);

  document.getElementById("output").innerHTML = output;
}

function reset() {
  document.getElementById("val1").value = "";
  document.getElementById("val2").value = "";

  document.getElementById("output").innerHTML = "00";
}
