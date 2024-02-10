function isNumber(value) {
    return typeof value === 'number';
  }

const sumAll = function(number1, number2) {
    if (number1 < 0 || number2 < 0) return "ERROR";
    if (!isNumber(number1) || !isNumber(number2)) return "ERROR";
    let sum = 0;
    if (number1 > number2) {
        const temp = number1;
        number1 = number2;
        number2 = temp;
    }
    for (let index = number1; index <= number2; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
