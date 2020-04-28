const championship = "Campeonato Catarinense";
console.log(championship);

const teams = ["Chapecoense", "Avaí", "JEC", "Brusque", "Figueirense"];
console.log("Times que estão participando do campeonato:", teams);

function showTeamPosition(colocação) {
  if (colocação < 1 || colocação > 5) {
    return "Não temos a informação do time que está nessa posição";
  }
  return (
    "O time que está em " +
    colocação +
    "°" +
    " lugar é o " +
    teams[colocação - 1] +
    "."
  );
}

console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));
console.log(showTeamPosition(5));
console.log(showTeamPosition(6));

let number = 20;

while (number <= 30) {
  console.log(number++);
}

function convertToHex(color) {
  var hexa;
  switch (color) {
    case "red":
      hexa = "#FF0000";
      break;
    case "blue":
      hexa = "#0000FF";
      break;
    case "green":
      hexa = "#00FF00";
      break;
    case "yellow":
      hexa = "#FFFF00";
      break;
    case "black":
      hexa = "#000000";
      break;
    default:
      return "Não temos o equivalente hexadecimal para " + color + ".";
  }
  return "O hexadecimal para a cor " + color + " é " + hexa + ".";
}

console.log(convertToHex("red"));
console.log(convertToHex("black"));
console.log(convertToHex("blue"));
console.log(convertToHex("yellow"));
console.log(convertToHex("green"));
