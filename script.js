function BMIcalculator() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  let BMI = weight / height ** 2;
  document.getElementById("BMI").innerText = "Your BMI is: " + BMI;

  if (BMI > 24.9) {
    document.getElementById("result").innerText = "You are overweight";
    document.getElementById("result").style.color = "red";
  } else if (BMI < 18.5) {
    document.getElementById("result").innerText = "You are underweight";
    document.getElementById("result").style.color = "red";
  } else {
    document.getElementById("result").innerText = "You are healthy";
    document.getElementById("result").style.color = "green";
  }
}
