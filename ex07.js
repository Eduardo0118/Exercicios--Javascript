const arr = [
  function () {},
  { name: "Eduardo" },
  null,
  NaN,
  "3",
  [3, "EDU", undefined],
];

function addItem(item) {
  arr.push(item);
  return arr;
}

addItem("Eduardo");
addItem("Sex");
console.log(addItem());

console.log(arr[5]);

console.log("O segundo elemento do segundo array é " + arr[1].name + ".");

console.log(arr.length);

console.log("O segundo array tem " + arr[5].length + " itens.");

console.log("Números pares entre 10 e 20:");

let num = 10;
while (num <= 20) {
  num % 2 === 0 ? console.log(num) : "";
  num++;
}

console.log("Números ímpares entre 10 e 20:");
let num = 10;
while (num <= 20) {
  num % 2 == !0 ? console.log(num) : "";
  num++;
}

console.log("Números pares entre 100 e 120:");
for (let numb = 100; numb <= 120; numb++) {
  numb % 2 === 0 ? console.log(numb) : "";
}

console.log("Números ímpares entre 111 e 125:");
for (let numb1 = 111; numb1 <= 125; numb1++) {
  numb1 % 2 == !0 ? console.log(numb1) : "";
}
