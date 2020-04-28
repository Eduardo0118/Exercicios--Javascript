const sum = function calculateSum(x, y) {
  return x + y;
};

let valueX = 12;
let valueY = 17;
console.log(
  "A soma de " + valueX + " e " + valueY + " é igual a " + sum(valueX, valueY)
);

console.log("O nome da função que faz a soma é " + sum.name + ".");

function showName() {
  return "Eduardo José";
}

const varShowName = function showName() {};

console.log("A função " + varShowName.name + " retorna " + showName());

function calculator(operator) {
  return function (number1, number2) {
    const result;
    switch (operator) {
      case " + ":
        result = number1 + number2;
        break;
      case " * ":
        result = number1 * number2;
        break;
      case " - ":
        result = number1 - number2;
        break;
      case " / ":
        result = number1 / number2;
        break;
      case " % ":
        result = number1 % number2;
        break;
      default:
        return "Sorry, operator is not valid";
    }
    return (
      "Resultado da operação: " +
      number1 +
      operator +
      number2 +
      " = " +
      result +
      "."
    );
  };
}

let sum = calculator(" + ");

console.log(sum(14, 4));

let subtraction = calculator(" + ");
let multiplication = calculator(" * ");
let division = calculator(" / ");
let mod = calculator(" % ");

console.log(subtraction(10, 17));
console.log(division(10, 17));
console.log(multiplication(10, 17));
console.log(mod(10, 17));
