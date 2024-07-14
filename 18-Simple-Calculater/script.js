function add() {
  let value1 = document.getElementById("val1").value;
  let value2 = document.getElementById("val2").value;

  if (value1 != "" && value2 != "") {
    let output = parseInt(value1) + parseInt(value2);

    document.getElementById("output").innerHTML = output;
  } else {
    alert("Please Fill Values");
    document.getElementById("val1").focus();
  }
}

function sub() {
  let value1 = document.getElementById("val1").value;
  let value2 = document.getElementById("val2").value;

  if (value1 != "" && value2 != "") {
    let output = parseInt(value1) - parseInt(value2);

    document.getElementById("output").innerHTML = output;
  } else {
    alert("Please Fill Values");
    document.getElementById("val1").focus();
  }
}

function mul() {
  let value1 = document.getElementById("val1").value;
  let value2 = document.getElementById("val2").value;

  if (value1 != "" && value2 != "") {
    let output = parseInt(value1) * parseInt(value2);

    document.getElementById("output").innerHTML = output;
  } else {
    alert("Please Fill Values");
    document.getElementById("val1").focus();
  }
}

function div() {
  let value1 = document.getElementById("val1").value;
  let value2 = document.getElementById("val2").value;

  if (value1 != "" && value2 != "") {
    let output = parseInt(value1) / parseInt(value2);

    document.getElementById("output").innerHTML = output;
  } else {
    alert("Please Fill Values");
    document.getElementById("val1").focus();
  }
}

function reset() {
  document.getElementById("val1").value = "";
  document.getElementById("val2").value = "";

  document.getElementById("output").innerHTML = "00";
}
