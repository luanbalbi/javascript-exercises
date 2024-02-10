const convertToCelsius = function(temperature) {
  const celsius = Math.round((temperature - 32) * 5/9*10)/10;
  return celsius;
};

const convertToFahrenheit = function(temperature) {
  const fahrenheit = Math.round((temperature * (9/5) + 32)*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

/*
	from Celsius to Fahrenheit	x °C ≘ (x × 9/5 + 32) °F
  to Celsius from x °F ≘ (x − 32) × 5/9 °C
*/