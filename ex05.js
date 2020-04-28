const arr = [1, "carro", "Eduardo", 4, 5];

function returnArr(arg) {
  return arg[1];
}

returnArr(arr);

function twoPam(array, number) {
  return array[number];
}

const array2 = [null, 3.54, undefined, "Eduardo", true];

console.log(twoPam(array2));

function book(hack) {
  const dadosBook = {
    "Livro do hack": {
      quantidadePaginas: 200,
      autor: "Eduardo José Carneiro",
      editora: "BooksVille",
    },
    "Manual do hack": {
      quantidadePaginas: 680,
      autor: "Eduardo José Carneiro",
      editora: "TratosVille",
    },
    "Manual do cracker": {
      quantidadePaginas: 250,
      autor: "Eduardo José Carneiro",
      editora: "EJBooks",
    },
  };

  return !hack ? dadosBook : dadosBook[hack];
}

console.log(book());

function book1() {
  return (
    "O livro Manual do hack tem " +
    book("Manual do hack").quantidadePaginas +
    " páginas!"
  );
}

function book2() {
  return (
    "O autor do livro Manual do hack é " + book("Manual do hack").autor + "!"
  );
}

function book3() {
  return (
    "O livro Manual do hack foi publicado pela editora " +
    book("Manual do hack").editora +
    "!"
  );
}

console.log(book1());
console.log(book2());
console.log(book3());
