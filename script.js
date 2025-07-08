function convertTemperature() {
  const temp = parseFloat(document.getElementById("temp").value);
  const unit = document.getElementById("unit").value;
  const output = document.getElementById("output");

  // Check for invalid number
  if (isNaN(temp)) {
    output.textContent = "❌ Please enter a valid number.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  // Temperature conversion based on selected unit
  switch (unit) {
    case "fahrenheit":
      celsius = (temp - 32) * 5 / 9;
      kelvin = celsius + 273.15;
      output.innerHTML = `
        <div>${celsius.toFixed(2)} °C</div>
        <div>${kelvin.toFixed(2)} K</div>
      `;
      break;

    case "celsius":
      fahrenheit = (temp * 9 / 5) + 32;
      kelvin = temp + 273.15;
      output.innerHTML = `
        <div>${fahrenheit.toFixed(2)} °F</div>
        <div>${kelvin.toFixed(2)} K</div>
      `;
      break;

    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9 / 5) + 32;
      output.innerHTML = `
        <div>${celsius.toFixed(2)} °C</div>
        <div>${fahrenheit.toFixed(2)} °F</div>
      `;
      break;

    default:
      output.textContent = "❌ Invalid unit selected.";
  }
}
