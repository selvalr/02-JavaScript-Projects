function sumofBMI() {
  let height = document.getElementById("height").value;
  let kg = document.getElementById("width").value;
  let outputBMI = document.getElementById("outputRange");

  let BMI = kg / (height / 100) ** 2;
  BMI = BMI.toFixed(2);

  let messageBMI;

  if (BMI < 16) {
    messageBMI = "Severely Underweight";
  } else if (BMI > 16 && BMI < 18) {
    messageBMI = "Underweight";
  } else if (BMI > 18 && BMI < 25) {
    messageBMI = "Normal";
  } else if (BMI > 25 && BMI < 30) {
    messageBMI = "Over weight";
  } else if (BMI > 30 && BMI < 35) {
    messageBMI = "Moderately Obese";
  } else if (BMI > 35 && BMI < 40) {
    messageBMI = "Severely Obese";
  } else {
    messageBMI = "Morbidly Obese";
  }

  outputBMI.innerHTML = `BMI Range: ${BMI} | ${messageBMI} `;
}
