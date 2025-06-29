function convertTemperature() {
  const temp = parseFloat(document.getElementById("temp").value);
  const unit = document.getElementById("unit").value;
  const output = document.getElementById("output");

  if (isNaN(temp)) {
    output.textContent = "Please enter a valid number.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unit) {
    case "fahrenheit":
      celsius = (temp - 32) * 5 / 9;
      kelvin = celsius + 273.15;
      output.innerHTML = `${celsius.toFixed(4)} °C<br>${kelvin.toFixed(4)} K`;
      break;
    case "celsius":
      fahrenheit = (temp * 9 / 5) + 32;
      kelvin = temp + 273.15;
      output.innerHTML = `${fahrenheit.toFixed(4)} °F<br>${kelvin.toFixed(4)} K`;
      break;
    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9 / 5) + 32;
      output.innerHTML = `${celsius.toFixed(4)} °C<br>${fahrenheit.toFixed(4)} °F`;
      break;
  }
}
